import { NotionAPI } from "notion-client"
import { ExtendedRecordMap } from "notion-types"
import { getAllPagesInSpace } from "notion-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import PostViewer from "@components/shared/PostViewer"
import AppLayout from "@components/layouts/AppLayout"
import { serviceRepository } from "@apis/repositories"
import { ArtProjectDto } from "@apis/dtos/arts.dto"
import api from "@apis/urls"
import {
  ArtProjectContainer,
  ArtProjectDescription,
} from "@components/feature/story/styled"
import BackIcon from "@components/shared/BackIcon"
import SingleSpinLoader from "@components/shared/SingleSpinLoader"

const notion = new NotionAPI()

type Props = {
  recordMap: ExtendedRecordMap
  artProject: ArtProjectDto
  success: boolean
  message?: string
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const notionId = context.params.id as string
  try {
    const recordMap = await notion.getPage(notionId)
    const artProject = await serviceRepository.getArtProjectDetail(notionId)
    return {
      props: {
        recordMap,
        artProject,
        success: true,
      },
      revalidate: 10,
    }
  } catch (error) {
    return {
      props: {
        recordMap: null,
        artProject: null,
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

export default function ArtProjectPage({
  recordMap,
  artProject,
  success,
  message,
}: Props) {
  return (
    <div>
      {success ? (
        <AppLayout>
          <ArtProjectContainer>
            <BackIcon />
            <ArtProjectDescription>
              <h2>{artProject.title}</h2>
            </ArtProjectDescription>
            <PostViewer recordMap={recordMap} />
          </ArtProjectContainer>
        </AppLayout>
      ) : (
        <SingleSpinLoader message={message} />
      )}
    </div>
  )
}
