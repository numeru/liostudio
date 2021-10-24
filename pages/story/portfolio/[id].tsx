import { MutableRefObject, useCallback, useEffect, useRef } from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { NotionAPI } from "notion-client"
import { ExtendedRecordMap } from "notion-types"
import { getAllPagesInSpace } from "notion-utils"
import api from "@apis/urls"
import { serviceRepository } from "@apis/repositories"
import { PortfolioDto } from "@apis/dtos/portfolios.dto"
import MovePageButtons from "@components/shared/MovePageButton"
import AppLayout from "@components/layouts/AppLayout"
import PostViewer from "@components/shared/PostViewer"
import {
  PortfolioDetailContainer,
  PortfolioDetailContent,
  PortfolioDetailTitleSection,
} from "@components/feature/story/styled"
import BackIcon from "@components/shared/BackIcon"
import SingleSpinLoader from "@components/shared/SingleSpinLoader"

type Props = {
  recordMap: ExtendedRecordMap
  portfolio: PortfolioDto
  success: boolean
  message?: string
}

const notion = new NotionAPI()

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const notionId = context.params.id as string
  try {
    const recordMap = await notion.getPage(notionId)
    const portfolio = await serviceRepository.getPortfolioDetail(notionId)
    return {
      props: {
        recordMap,
        portfolio,
        success: true,
      },
      revalidate: 10,
    }
  } catch (error) {
    return {
      props: {
        recordMap: null,
        portfolio: null,
        success: false,
        message: error.message,
      },
      revalidate: 10,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const rootNotionPageId = "7fe7cd23350c441dac14eb121eac24d4"
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

export default function PortfolioDetailPage({
  recordMap,
  portfolio,
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
          <PortfolioDetailContainer>
            <BackIcon />
            <PortfolioDetailTitleSection>
              <h2>Portfolio</h2>
            </PortfolioDetailTitleSection>
            <PortfolioDetailContent>
              <p>{portfolio.title}</p>
              <p>{portfolio.description}</p>
              <PostViewer recordMap={recordMap} />
            </PortfolioDetailContent>

            <MovePageButtons
              handlePrevButton={() => moveToSelectedPage(portfolio.next)}
              handleNextButton={() => moveToSelectedPage(portfolio.previous)}
            />
          </PortfolioDetailContainer>
        </AppLayout>
      ) : (
        <SingleSpinLoader message={message} />
      )}
    </div>
  )
}
