export class NewsDto {
  author: string
  clicked: number
  contents: string
  createdAt: string
  description: string
  firstPoster: string
  id: string
  resizedThumbnail: string
  secondPoster: string
  thumbnail: string
  title: string
  updatedAt: string
}

export class NewsListDto {
  news: NewsDto[]
  totalPages: number | null
  currentPage: number | null
  prevPage: number | null
  nextPage: number | null
  limitation: number | null
}
