import { MutableRefObject, useEffect, useRef, useCallback } from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { NotionAPI } from "notion-client"
import { ExtendedRecordMap } from "notion-types"
import { getAllPagesInSpace } from "notion-utils"
import api from "@apis/urls"
import AppLayout from "@components/layouts/AppLayout"
import MovePageButtons from "@components/shared/MovePageButton"
import BackIcon from "@components/shared/BackIcon"
import {
  TechDetailContainer,
  TechDetailContentWrapper,
  TechDetailHeader,
  TechDetailTitle,
  TechDetailDate,
} from "@components/feature/story/tech/detail.styled"
import { TechDto } from "@apis/dtos/techs.dto"
import { serviceRepository } from "@apis/repositories"
import PostViewer from "@components/shared/PostViewer"
import SingleSpinLoader from "@components/shared/SingleSpinLoader"

type Props = {
  recordMap: ExtendedRecordMap
  tech: TechDto
  success: boolean
  message?: string
}

const notion = new NotionAPI()

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const notionId = context.params.id as string
  try {
    const recordMap = await notion.getPage(notionId)
    const tech = await serviceRepository.getTechDetail(notionId)
    return {
      props: {
        recordMap,
        tech,
        success: true,
      },
      revalidate: 10,
    }
  } catch (error) {
    return {
      props: {
        recordMap: null,
        tech: null,
        success: false,
        message: error.message,
      },
      revalidate: 10,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const rootNotionPageId = "Tech-Blog-6fe5ae2af5384f45bfae07f3d77514b7"
  const rootNotionSpaceId = "fde5ac74-eea3-4527-8f00-4482710e1af3"
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion),
    {
      traverseCollections: false,
    },
  )
  const paths = Object.keys(pages).map(
    (pageId) => `${api.arts.projects.contents}/${pageId}`,
  )
  return {
    paths,
    fallback: true,
  }
}

export default function TechDetailPage({
  recordMap,
  tech,
  success,
  message,
}: Props) {
  const router = useRouter()

  const moveToSelectedPage = useCallback(
    (id: string) => {
      if (id !== null) {
        router.push(`${id}`)
        scrollToTop()
      }
    },
    [router],
  )

  const topRef = useRef<HTMLElement>(null)

  const scrollToTop = () => {
    const current = (topRef as MutableRefObject<HTMLElement>)?.current
    current?.scrollIntoView()
  }

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div>
      {success ? (
        <AppLayout>
          <TechDetailContainer>
            <BackIcon />
            <TechDetailContentWrapper>
              <TechDetailHeader>
                <TechDetailTitle>title</TechDetailTitle>
                <TechDetailDate>2020.00.00 | 0 views</TechDetailDate>
              </TechDetailHeader>
              <PostViewer recordMap={recordMap} />

              <MovePageButtons
                handlePrevButton={() => moveToSelectedPage(tech.next)}
                handleNextButton={() => moveToSelectedPage(tech.previous)}
              />
            </TechDetailContentWrapper>
          </TechDetailContainer>
        </AppLayout>
      ) : (
        <SingleSpinLoader message={message} />
      )}
    </div>
  )
}
