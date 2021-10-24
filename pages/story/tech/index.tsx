import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import useSWR from "swr"
import api from "@apis/urls"
import { TechPaginationDto } from "@apis/dtos/pagination.dto"
import { TechDto } from "@apis/dtos/techs.dto"
import {
  TechContainer,
  TechList,
  TechListWrapper,
  TechTitleSection,
} from "@components/feature/story/tech/styled"
import TechItem from "@components/feature/story/tech/TechItem"
import AppLayout from "@components/layouts/AppLayout"
import Pagenation, { PagenationOption } from "@components/shared/Pagenation"
import fetcher from "@utils/fetcher"
import { swrOption } from "@utils/swr-options"
import SingleSpinLoader from "@components/shared/SingleSpinLoader"

export default function StoryTechPage() {
  const [isReady, setIsReady] = useState<boolean>()
  const { query, push: routerPush } = useRouter()

  const [searchQuery, setSearchQuery] = useState("")

  const handleChangeSearchQuery = (query: string) => {
    routerPush(`/story/tech?${query ? `search=${query}&` : ""}page=1`)
  }

  const [currnetPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (query?.search) {
      setSearchQuery(String(query?.search))
    } else {
      setSearchQuery("")
    }
    if (query?.page) {
      setCurrentPage(parseInt(String(query?.page)))
    }
  }, [query, query.search, query.page])

  const {
    techs: { index, search },
  } = api

  const searchUrl = useMemo(() => {
    const limit = 4
    if (searchQuery) {
      return `${search}?q=${searchQuery}&page=${currnetPage}&limit=${limit}`
    } else {
      return `${index}?page=${currnetPage}&limit=${limit}`
    }
  }, [index, search, searchQuery, currnetPage])

  const { data: techData } = useSWR<TechPaginationDto>(
    searchUrl,
    fetcher,
    swrOption,
  )
  const [paginatedTechsList, setPaginatedTechsList] = useState<TechDto[]>([])

  const handlePagenationButton = (selectedButton: PagenationOption) => {
    if (paginatedTechsList.length === 0) return

    switch (selectedButton) {
      case "prev_end":
        if (techData?.prevPage !== null) {
          routerPush(
            `/story/tech?${searchQuery ? `search=${searchQuery}&` : ""}page=1`,
          )
        }
        break
      case "prev":
        if (techData?.prevPage !== null) {
          routerPush(
            `/story/tech?${searchQuery ? `search=${searchQuery}&` : ""}page=${
              techData?.prevPage
            }`,
          )
        }
        break
      case "next":
        if (techData?.nextPage !== null) {
          routerPush(
            `/story/tech?${searchQuery ? `search=${searchQuery}&` : ""}page=${
              techData?.nextPage
            }`,
          )
        }
        break
      case "next_end":
        if (techData?.nextPage !== null) {
          routerPush(
            `/story/tech?${searchQuery ? `search=${searchQuery}&` : ""}page=${
              techData?.totalPages
            }`,
          )
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    setPaginatedTechsList(techData?.techs)
    if (techData) {
      setIsReady(true)
    }
  }, [techData])

  return (
    <AppLayout>
      {isReady ? (
        <TechContainer>
          <TechTitleSection>
            <h2>Tech</h2>
          </TechTitleSection>
          <TechListWrapper>
            <TechList>
              {paginatedTechsList?.map((aTech) => (
                <li key={aTech.id}>
                  <TechItem techInfo={aTech} />
                </li>
              ))}
            </TechList>
            <Pagenation
              currnetPage={currnetPage}
              handlePagenationButton={handlePagenationButton}
              handleChangeSearchQuery={handleChangeSearchQuery}
            />
          </TechListWrapper>
        </TechContainer>
      ) : (
        <SingleSpinLoader bg="white" />
      )}
    </AppLayout>
  )
}
