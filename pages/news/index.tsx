import api from "@apis/urls"
import NewsItem from "@components/feature/news/NewsItem"
import {
  NewsContainer,
  NewsList,
  NewsTitleSection,
} from "@components/feature/news/styled"
import AppLayout from "@components/layouts/AppLayout"
import Pagenation, { PagenationOption } from "@components/shared/Pagenation"
import SingleSpinLoader from "@components/shared/SingleSpinLoader"
import fetcher from "@utils/fetcher"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState, useCallback } from "react"
import useSWR from "swr"

export type NewsInfo = {
  author: string
  clicked: number
  contents: string
  createdAt: string
  description: string
  firstPoster: string
  id: string
  nextNews: string | null
  previousNews: string | null
  resizedThumbnail: string
  secondPoster: string
  thumbnail: string
  title: string
  updatedAt: string
}

export type NewsData = {
  news: NewsInfo[]
  totalPages: number | null
  currentPage: number | null
  prevPage: number | null
  nextPage: number | null
  limitation: number | null
}

export default function NewsPage() {
  const [isReady, setIsReady] = useState<boolean>()
  const [searchQuery, setSearchQuery] = useState("")
  const [paginatedNewsList, setPaginatedNewsList] = useState<NewsInfo[]>([])
  const [currnetPage, setCurrentPage] = useState(1)
  const router = useRouter()

  const searchNewsUrl = useMemo(() => {
    const limit = 6
    if (searchQuery) {
      return `${api.news.search}?q=${searchQuery}&page=${currnetPage}&limit=${limit}`
    } else {
      return `${api.news.index}?page=${currnetPage}&limit=${limit}`
    }
  }, [searchQuery, currnetPage])

  const { data: newsData, error } = useSWR<NewsData>(searchNewsUrl, fetcher)

  useEffect(() => {
    setPaginatedNewsList(newsData?.news)
    if (newsData) setIsReady(true)
    else if (error) alert(error)
  }, [newsData, error])

  //TODO query?.page이 배열인 경우는 언제일까??
  useEffect(() => {
    if (router.query?.search) {
      setSearchQuery(String(router.query?.search))
    } else {
      setSearchQuery("")
    }
    if (router.query?.page) {
      setCurrentPage(parseInt(String(router.query?.page)))
    }
  }, [router])

  const handleChangeSearchQuery = useCallback(
    (query: string) => {
      router.push(`/news?${query ? `search=${query}&` : ""}page=1`)
    },
    [router],
  )

  const handlePagenationButton = (selectedButton: PagenationOption) => {
    if (paginatedNewsList.length === 0) return

    switch (selectedButton) {
      case "prev_end":
        if (newsData?.prevPage !== null) {
          router.push(
            `/news?${searchQuery ? `search=${searchQuery}&` : ""}page=1`,
          )
        }
        break
      case "prev":
        if (newsData?.prevPage !== null) {
          router.push(
            `/news?${searchQuery ? `search=${searchQuery}&` : ""}page=${
              newsData?.prevPage
            }`,
          )
        }
        break
      case "next":
        if (newsData?.nextPage !== null) {
          router.push(
            `/news?${searchQuery ? `search=${searchQuery}&` : ""}page=${
              newsData?.nextPage
            }`,
          )
        }
        break
      case "next_end":
        if (newsData?.nextPage !== null) {
          router.push(
            `/news?${searchQuery ? `search=${searchQuery}&` : ""}page=${
              newsData?.totalPages
            }`,
          )
        }
        break

      default:
        break
    }
  }

  return (
    <AppLayout>
      {isReady ? (
        <NewsContainer>
          <NewsTitleSection>
            <h2>News</h2>
          </NewsTitleSection>
          <NewsList>
            {paginatedNewsList?.map((aNews) => (
              <li key={aNews.id}>
                <NewsItem newsInfo={aNews} />
              </li>
            ))}
          </NewsList>
          <Pagenation
            currnetPage={currnetPage}
            handlePagenationButton={handlePagenationButton}
            handleChangeSearchQuery={handleChangeSearchQuery}
          />
        </NewsContainer>
      ) : (
        <SingleSpinLoader />
      )}
    </AppLayout>
  )
}
