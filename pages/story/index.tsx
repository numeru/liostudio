import Artworks from "@components/feature/story/artwork/Artworks"
import {
  ArtCategoryItem,
  ArtCategoryList,
  ArtContainer,
  ArtTitleSection,
} from "@components/feature/story/styled"
import AppLayout from "@components/layouts/AppLayout"
import { artCategories } from "@utils/constants/art-categories"
import { useState } from "react"

export type ArtCategory =
  | "All"
  | "Graphic"
  | "Video"
  | "Craft"
  | "Exhibition"
  | "Project"

export default function StoryArtPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory>("All")
  const [currnetPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")

  const handleClickCategory = (category: ArtCategory) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setSearchQuery("")
  }

  const showArtCategories = () =>
    artCategories?.map((category) => (
      <ArtCategoryItem
        key={category.id}
        selected={selectedCategory === category.name}
      >
        <button onClick={() => handleClickCategory(category.name)}>
          {category.name}
        </button>
      </ArtCategoryItem>
    ))

  return (
    <AppLayout>
      <ArtContainer>
        <ArtTitleSection>
          <h2>Artworks</h2>
        </ArtTitleSection>
        <ArtCategoryList>{showArtCategories()}</ArtCategoryList>

        <Artworks
          selectedCategory={selectedCategory}
          currentPage={currnetPage}
          setCurrentPage={setCurrentPage}
          limit={12}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </ArtContainer>
    </AppLayout>
  )
}
