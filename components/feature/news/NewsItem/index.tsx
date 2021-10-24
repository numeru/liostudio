import { NewsInfo } from "@pages/news"
import React from "react"
import {
  NewsCard,
  NewsDate,
  NewsDescription,
  NewsThumbnail,
  NewsReadMore,
} from "@components/feature/news/NewsItem/styled"
import { useRouter } from "next/router"

type Props = {
  newsInfo: NewsInfo
}

const NewsItem = ({ newsInfo }: Props) => {
  const { id, createdAt, title, thumbnail, description } = newsInfo

  const { push: routerPush } = useRouter()

  const handleClickNewsItem = () => {
    routerPush(`news/${id}`)
  }

  return (
    <NewsCard onClick={handleClickNewsItem}>
      <NewsDate>{createdAt.slice(0, 10).replace(/\-/g, ".")}</NewsDate>
      <NewsThumbnail
        src={thumbnail}
        alt="lio-news-article"
        width="753.86"
        height="580.72"
      />
      <NewsDescription>
        <p>{title}</p>
        <p>{description}</p>
        <p>
          Read <span>more</span>
          <NewsReadMore src="/images/news/news_read_more.svg" alt="read_more" />
        </p>
      </NewsDescription>
    </NewsCard>
  )
}

export default NewsItem
