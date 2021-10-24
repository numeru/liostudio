import api from "@apis/urls"
import Modal from "@components/shared/ArtModal"
import fetcher from "@utils/fetcher"
import { useMemo } from "react"
import useSWR from "swr"
import { ArtInfo } from "@components/feature/story/artwork/Artworks"
import { ArtCategory } from "@pages/story"
import {
  ArtworkCategory,
  ArtworkImage,
  ArtworkTitle,
  SlideButtonImage,
  SlideLeftButton,
  SlideRightButton,
} from "@components/feature/story/artwork/ArtworkSlide/styled"
import VideoPlayer from "@components/shared/VideoPlayer"
import { swrOption } from "@utils/swr-options"

type Props = {
  selectedCategory: ArtCategory
  selectedArtwork: string
  setSelectedArtwork: React.Dispatch<React.SetStateAction<string>>
  initArtworkSlide: () => void
}

const ArtworkSlide = ({
  selectedCategory,
  selectedArtwork,
  setSelectedArtwork,
  initArtworkSlide,
}: Props) => {
  const getArtworkByIdUrl = useMemo(
    () => `${api.arts.index}/${selectedArtwork}`,
    [selectedArtwork],
  )

  const { data: artworkData } = useSWR<ArtInfo>(
    getArtworkByIdUrl,
    fetcher,
    swrOption,
  )

  const handleClickSlideButton = (direction: "prev" | "next") => {
    if (selectedCategory !== "All") {
      if (direction === "prev") {
        setSelectedArtwork((prev) => artworkData?.nextByCategory || prev)
      } else if (direction === "next") {
        setSelectedArtwork((prev) => artworkData?.previousByCategory || prev)
      }
    } else {
      if (direction === "prev") {
        setSelectedArtwork((prev) => artworkData?.nextByAll || prev)
      } else if (direction === "next") {
        setSelectedArtwork((prev) => artworkData?.previousByAll || prev)
      }
    }
  }

  return (
    <Modal onCloseModal={initArtworkSlide}>
      <ArtworkTitle>{artworkData?.title}</ArtworkTitle>
      <SlideLeftButton onClick={() => handleClickSlideButton("prev")}>
        <SlideButtonImage
          src="/images/story/slide-left.svg"
          alt="slide_button_image"
        />
      </SlideLeftButton>

      {artworkData?.video === null ? (
        <ArtworkImage src={artworkData?.thumbnail} alt="artwork" />
      ) : (
        <VideoPlayer src={artworkData?.video} />
      )}

      <ArtworkCategory>{artworkData?.category}</ArtworkCategory>
      <SlideRightButton onClick={() => handleClickSlideButton("next")}>
        <SlideButtonImage
          src="/images/story/slide-right.svg"
          alt="slide_button_image"
        />
      </SlideRightButton>
    </Modal>
  )
}

export default ArtworkSlide
