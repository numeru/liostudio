import api from "@apis/urls"
import axios from "axios"
import { GetServerSideProps } from "next"
import { NewsData, NewsInfo } from "@pages/news"
import useSWR from "swr"
import fetcher from "@utils/fetcher"
import {
  NewsItemContainer,
  NewsItemContent,
  NewsItemsPoster,
  NewsDetailTitleSection,
  RecentNewsList,
  RecentNewsThumb,
} from "@components/feature/news/styled"
import AppLayout from "@components/layouts/AppLayout"
import { useRouter } from "next/router"
import BackIcon from "@components/shared/BackIcon"
import { MutableRefObject, useEffect, useRef } from "react"
import MovePageButtons from "@components/shared/MovePageButton"

type Props = {
  newsItemData: NewsInfo
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const {
    news: { index },
  } = api

  const id = context.params.id

  const newsItemData: NewsInfo = await axios
    .get(`${index}/${id}`)
    .then((response) => response.data.data)

  return {
    props: {
      newsItemData,
    },
  }
}

export default function NewsDetail({ newsItemData }) {
  const { query, push: routerPush } = useRouter()
  const {
    title,
    firstPoster,
    contents,
    createdAt,
    author,
    secondPoster,
    previousNews,
    nextNews,
  } = newsItemData

  const {
    news: { index },
  } = api

  const { data: newsData } = useSWR<NewsData>(
    `${index}?page=1&limit=3`,
    fetcher,
  )

  const moveToSelectedNewsPage = (id: string) => {
    if (id !== null) {
      routerPush(`${id}`)
      scrollToTop()
    }
  }

  const topRef = useRef<HTMLElement>(null)

  const scrollToTop = () => {
    const current = (topRef as MutableRefObject<HTMLElement>)?.current
    current.scrollIntoView()
  }

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <AppLayout>
      <NewsItemContainer ref={topRef}>
        <BackIcon />
        <NewsDetailTitleSection>
          <h2>News</h2>
        </NewsDetailTitleSection>
        <NewsItemContent>
          <h3>{title}</h3>
          <NewsItemsPoster src={firstPoster} alt="news_poster" />
          <p>
            {contents}
            <br />
            <br />
            {createdAt.slice(0, 10).replace(/\-/g, ".")}
            <br />
            {author} 기자
          </p>
          <NewsItemsPoster src={secondPoster} alt="news_poster" />
        </NewsItemContent>
      </NewsItemContainer>

      <MovePageButtons
        handlePrevButton={() => moveToSelectedNewsPage(nextNews)}
        handleNextButton={() => moveToSelectedNewsPage(previousNews)}
      >
        <RecentNewsList>
          {newsData?.news?.map((aNews) => (
            <li key={aNews.id} onClick={() => moveToSelectedNewsPage(aNews.id)}>
              <RecentNewsThumb src={aNews.resizedThumbnail} alt="recent_news" />
            </li>
          ))}
        </RecentNewsList>
      </MovePageButtons>
    </AppLayout>
  )
}
