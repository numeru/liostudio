import React from "react"
import {
  ArtInfo,
  ProjectInfo,
} from "@components/feature/story/artwork/Artworks"
import {
  ArtworkDescription,
  ArtworkItem,
  ArtworkTumbnail,
} from "@components/feature/story/artwork/Artwork/styled"
import { ArtCategory } from "@pages/story"
import { useRouter } from "next/router"

type Props = {
  artwork: ArtInfo | ProjectInfo
  setSelectedArtwork: React.Dispatch<React.SetStateAction<string>>
  selectedCategory: ArtCategory
}

const Artwork = ({ artwork, setSelectedArtwork, selectedCategory }: Props) => {
  const { id, resizedThumbnail, title, category } = artwork

  const { push: routerPush } = useRouter()

  const handleClickArtwork = () => {
    if (selectedCategory === "Project") {
      const projectArtwork = artwork as ProjectInfo
      routerPush(`story/project/${projectArtwork.notionId}`)
    } else {
      setSelectedArtwork(id)
    }
  }
  return (
    <ArtworkItem key={id} onClick={handleClickArtwork}>
      <ArtworkTumbnail
        src={resizedThumbnail}
        alt="art"
        width="425.38"
        height="425.38"
      />
      <ArtworkDescription>
        <span>{title}</span>
        <span>{category}</span>
      </ArtworkDescription>
    </ArtworkItem>
  )
}

export default Artwork
