export class ArtProjectDto {
  clicked: number
  createdAt: string
  id: string
  nextByCategory: string | null
  previousByCategory: string | null
  resizedThumbnail: string
  thumbnail: string
  title: string
  updatedAt: string
  notionId: string
  category: "Project"
}

export class ArtListDto {}
