import SearchForm from "@components/shared/SearchForm"
import { useRouter } from "next/router"
import { useMemo } from "react"
import styled from "styled-components"

export type PagenationOption = "prev_end" | "prev" | "next" | "next_end"

type Props = {
  currnetPage: number
  handlePagenationButton: (selectedButton: PagenationOption) => void
  handleChangeSearchQuery: (query: string) => void
}

type StyledProps = {
  checkPath: boolean
}

const PagenationContainer = styled.section`
  position: relative;
  width: 100%;
  height: 25vh;
  background-color: ${({ checkPath }: StyledProps) =>
    checkPath ? "white" : "black"};
  color: ${({ checkPath }: StyledProps) => (checkPath ? "black" : "white")};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2% ${({ checkPath }: StyledProps) => (checkPath ? "0" : "2.5%")};

  @media screen and (max-width: 1024px) {
    height: 18vh;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`

const PagenationButtons = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const PagenationButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0 1%;
  cursor: pointer;
  padding: 0 0.5%;

  @media screen and (max-width: 768px) {
    width: 1.1rem;
    height: 1.1rem;
    margin: 0 4%;
  }
`

const CurrentPage = styled.span`
  margin: 0 6%;
  font-family: var(--font-helvetica);

  @media screen and (max-width: 1920px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 414px) {
    font-size: 10px;
  }
`

const PagenationButtonImage = styled.img``

const PagenationEndButtonImage = styled.img``

export default function Pagenation({
  currnetPage,
  handlePagenationButton,
  handleChangeSearchQuery,
}: Props) {
  const router = useRouter()
  const { pathname } = router

  const checkPath = useMemo(
    (): boolean => pathname.slice(1, 6) === "story",
    [pathname],
  )

  return (
    <PagenationContainer checkPath={checkPath}>
      <SearchForm
        handleChangeSearchQuery={handleChangeSearchQuery}
        checkPath={checkPath}
      />

      <PagenationButtons>
        <PagenationButton onClick={() => handlePagenationButton("prev_end")}>
          <PagenationEndButtonImage
            src={`/images/shared/prev_end_icon${checkPath ? "_black" : ""}.svg`}
          />
        </PagenationButton>
        <PagenationButton onClick={() => handlePagenationButton("prev")}>
          <PagenationButtonImage
            src={`/images/shared/prev_icon${checkPath ? "_black" : ""}.svg`}
          />
        </PagenationButton>

        <CurrentPage>{currnetPage}</CurrentPage>

        <PagenationButton onClick={() => handlePagenationButton("next")}>
          <PagenationButtonImage
            src={`/images/shared/next_icon${checkPath ? "_black" : ""}.svg`}
          />
        </PagenationButton>
        <PagenationButton onClick={() => handlePagenationButton("next_end")}>
          <PagenationEndButtonImage
            src={`/images/shared/next_end_icon${checkPath ? "_black" : ""}.svg`}
          />
        </PagenationButton>
      </PagenationButtons>
    </PagenationContainer>
  )
}
