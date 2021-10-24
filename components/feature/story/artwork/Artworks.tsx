import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react"
import fetcher from "@utils/fetcher"
import api from "@apis/urls"
import useSWR from "swr"
import { ArtCategory } from "@pages/story"
import Pagenation, { PagenationOption } from "@components/shared/Pagenation"
import {
  ArtworkContainer,
  ArtworkList,
} from "@components/feature/story/artwork/styled"
import Artwork from "@components/feature/story/artwork/Artwork"
import ArtworkSlide from "@components/feature/story/artwork/ArtworkSlide"
import { swrOption } from "@utils/swr-options"
import SpinLoader from "@components/shared/SpinLoader"

export type ArtInfo = {
  category: string
  clicked: number
  createdAt: string
  id: string
  nextByAll: string | null
  nextByCategory: string | null
  previousByAll: string | null
  previousByCategory: string | null
  resizedThumbnail: string
  thumbnail: string
  title: string
  updatedAt: string
  video: string | null
}

//TODO Dto로 모두 변경
export type ProjectInfo = {
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

type ArtData = {
  arts?: ArtInfo[]
  artProjects?: ProjectInfo[]
  currentPage: number
  limitation: number
  nextPage: number | null
  prevPage: number | null
  totalPages: number
}

type Props = {
  selectedCategory: ArtCategory
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  limit: number
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}

export default function Artworks({
  selectedCategory,
  currentPage,
  setCurrentPage,
  limit,
  searchQuery,
  setSearchQuery,
}: Props) {
  const [isReady, setIsReady] = useState<boolean>()

  const {
    arts: {
      index: artUrl,
      projects: { index: projectUrl },
      search: searchUrl,
    },
  } = api

  const handleChangeSearchQuery = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const getArtworkUrl = useMemo(() => {
    if (searchQuery) {
      return `${searchUrl}?q=${searchQuery}&page=${currentPage}&limit=${limit}`
    } else if (selectedCategory === "Project") {
      return `${projectUrl}?page=${currentPage}&limit=${limit}`
    }
    return `${artUrl}?page=${currentPage}&limit=${limit}&q=${selectedCategory.toLowerCase()}`
  }, [
    selectedCategory,
    searchQuery,
    currentPage,
    limit,
    artUrl,
    projectUrl,
    searchUrl,
  ])

  const { data: artData } = useSWR<ArtData>(getArtworkUrl, fetcher, swrOption)

  const [paginatedArtList, setPaginatedArtList] = useState<
    ArtInfo[] | ProjectInfo[]
  >([])

  useEffect(() => {
    if (selectedCategory === "Project") {
      const newProjects: ProjectInfo[] = artData?.artProjects.map((p) => {
        return { ...p, category: selectedCategory }
      })
      setPaginatedArtList(newProjects)
    } else {
      setPaginatedArtList(artData?.arts)
    }
  }, [artData, selectedCategory])

  useEffect(() => {
    if (artData) {
      setIsReady(true)
    }
  }, [artData])

  const handlePagenationButton = (selectedButton: PagenationOption) => {
    if (paginatedArtList?.length === 0) return

    switch (selectedButton) {
      case "prev_end":
        setCurrentPage(1)
        break
      case "prev":
        if (artData?.prevPage !== null) {
          setCurrentPage(artData.prevPage)
        }
        break
      case "next":
        if (artData?.nextPage !== null) {
          setCurrentPage(artData.nextPage)
        }
        break
      case "next_end":
        if (artData?.nextPage !== null) {
          setCurrentPage(artData.totalPages)
        }
        break

      default:
        break
    }
  }

  const [selectedArtwork, setSelectedArtwork] = useState("")

  const initArtworkSlide = () => setSelectedArtwork("")

  return (
    <ArtworkContainer>
      <ArtworkList>
        {isReady ? (
          paginatedArtList?.map((art) => (
            <Artwork
              key={art.id}
              artwork={art}
              setSelectedArtwork={setSelectedArtwork}
              selectedCategory={selectedCategory}
            />
          ))
        ) : (
          <SpinLoader />
        )}
      </ArtworkList>
      <Pagenation
        currnetPage={currentPage}
        handlePagenationButton={handlePagenationButton}
        handleChangeSearchQuery={handleChangeSearchQuery}
      />
      {selectedArtwork && selectedCategory !== "Project" && (
        <ArtworkSlide
          selectedCategory={selectedCategory}
          selectedArtwork={selectedArtwork}
          setSelectedArtwork={setSelectedArtwork}
          initArtworkSlide={initArtworkSlide}
        />
      )}
    </ArtworkContainer>
  )
}
