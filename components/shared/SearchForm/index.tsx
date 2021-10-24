import React, { useState } from "react"
import {
  SearchButton,
  SearchFormContainer,
  SearchIcon,
  SearchInput,
} from "@components/shared/SearchForm/styled"

type Props = {
  handleChangeSearchQuery: (query: string) => void
  checkPath: boolean
}

const SearchForm = ({ handleChangeSearchQuery, checkPath }: Props) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmitSearchForm = (e) => {
    e.preventDefault()
    handleChangeSearchQuery(inputValue.trim())
    setInputValue("")
  }

  return (
    <SearchFormContainer
      onSubmit={handleSubmitSearchForm}
      checkPath={checkPath}
    >
      <SearchInput
        placeholder="Search"
        value={inputValue}
        onChange={handleInputValue}
        checkPath={checkPath}
      />
      <SearchButton type="submit" checkPath={checkPath}>
        <SearchIcon
          src={`/images/shared/search-icon${checkPath ? "-black" : ""}.svg`}
          alt="search-icon"
        />
      </SearchButton>
    </SearchFormContainer>
  )
}

export default SearchForm
