import api from "@apis/urls"
import PortfolioItem from "@components/feature/story/portfolio/PortfolioItem"
import AppLayout from "@components/layouts/AppLayout"
import Pagenation, { PagenationOption } from "@components/shared/Pagenation"
import SingleSpinLoader from "@components/shared/SingleSpinLoader"
import fetcher from "@utils/fetcher"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import useSWR from "swr"

const PortfolioContainer = styled.main`
  width: 100%;
  min-height: 82%;
  padding: 3.4% 8.6% 2% 8.6%;

  @media screen and (max-width: 1024px) {
    padding: 2.5% 0;
    border-bottom: 11px solid #f7f7f7;
  }
`

const PortfolioTitleSection = styled.div`
  width: 100%;
  padding: 5% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;

  & > h2 {
    font-size: 1.5vw;
    font-weight: bold;
    margin: 0;
  }

  @media screen and (max-width: 1920px) {
    & > h2 {
      font-size: 21px;
    }
  }
  @media screen and (max-width: 1428px) {
    & > h2 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 4% 7.6%;
    position: relative;
    border-bottom: 11px solid #f7f7f7;
    justify-content: flex-start;

    & > h2 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    & > h2 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 414px) {
    & > h2 {
      font-size: 15px;
    }
  }
`

const PortfolioListWrapper = styled.section`
  @media screen and (max-width: 1024px) {
    padding: 2% 7.6%;
  }
`

const PortfolioList = styled.ul`
  padding: 0;
  margin: 0;
`

export type PortfolioInfo = {
  clicked: number
  createdAt: string
  id: string
  next: string | null
  previous: string | null
  description: string
  thumbnail: string
  mobileThumbnail: string
  title: string
  updatedAt: string
  notionId: string
}

type PortfolioData = {
  portfolios: PortfolioInfo[]
  currentPage: number
  limitation: number
  nextPage: number | null
  prevPage: number | null
  totalPages: number
}

const StoryPortfolio = () => {
  const [isReady, setIsReady] = useState<boolean>()
  const { query, push: routerPush } = useRouter()

  const [searchQuery, setSearchQuery] = useState("")

  const handleChangeSearchQuery = (query: string) => {
    routerPush(`/story/portfolio?${query ? `search=${query}&` : ""}page=1`)
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
    portfolios: { index, search },
  } = api

  const searchUrl = useMemo(() => {
    const limit = 4
    if (searchQuery) {
      return `${search}?q=${searchQuery}&page=${currnetPage}&limit=${limit}`
    } else {
      return `${index}?page=${currnetPage}&limit=${limit}`
    }
  }, [index, search, searchQuery, currnetPage])

  const { data: portfoliosData } = useSWR<PortfolioData>(searchUrl, fetcher)

  const [paginatedPortfolioList, setPaginatedPortfolioList] = useState<
    PortfolioInfo[]
  >([])

  const handlePagenationButton = (selectedButton: PagenationOption) => {
    if (paginatedPortfolioList.length === 0) return

    switch (selectedButton) {
      case "prev_end":
        if (portfoliosData?.prevPage !== null) {
          routerPush(
            `/story/portfolio?${
              searchQuery ? `search=${searchQuery}&` : ""
            }page=1`,
          )
        }
        break
      case "prev":
        if (portfoliosData?.prevPage !== null) {
          routerPush(
            `/story/portfolio?${
              searchQuery ? `search=${searchQuery}&` : ""
            }page=${portfoliosData?.prevPage}`,
          )
        }
        break
      case "next":
        if (portfoliosData?.nextPage !== null) {
          routerPush(
            `/story/portfolio?${
              searchQuery ? `search=${searchQuery}&` : ""
            }page=${portfoliosData?.nextPage}`,
          )
        }
        break
      case "next_end":
        if (portfoliosData?.nextPage !== null) {
          routerPush(
            `/story/portfolio?${
              searchQuery ? `search=${searchQuery}&` : ""
            }page=${portfoliosData?.totalPages}`,
          )
        }
        break

      default:
        break
    }
  }

  useEffect(() => {
    setPaginatedPortfolioList(portfoliosData?.portfolios)
    if (portfoliosData) setIsReady(true)
  }, [portfoliosData])

  return (
    <AppLayout>
      {isReady ? (
        <PortfolioContainer>
          <PortfolioTitleSection>
            <h2>Portfolio</h2>
          </PortfolioTitleSection>
          <PortfolioListWrapper>
            <PortfolioList>
              {paginatedPortfolioList?.map((portfolio) => {
                return (
                  <li key={portfolio.id}>
                    <PortfolioItem portfolio={portfolio} />
                  </li>
                )
              })}
            </PortfolioList>
            <Pagenation
              currnetPage={currnetPage}
              handlePagenationButton={handlePagenationButton}
              handleChangeSearchQuery={handleChangeSearchQuery}
            />
          </PortfolioListWrapper>
        </PortfolioContainer>
      ) : (
        <SingleSpinLoader />
      )}
    </AppLayout>
  )
}

export default StoryPortfolio
