import styled from "styled-components"

export const PortfolioCard = styled.article`
  padding: 2% 0;
  border-bottom: 1px solid black;
  cursor: pointer;
`

export const PortfolioDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2%;
  min-height: 5.5vh;
  margin-bottom: 1%;

  & > p {
    margin: 0;
    min-height: 5.5vh;
    padding: 0px;

    &:first-child {
      width: 28.5%;
      font-size: 1vw;
    }
    &:last-child {
      width: 64.65%;
      font-size: 0.8rem;
    }
  }

  & > div {
    border-left: 1px solid;
    height: 5vh;
    width: 1px;
  }

  @media screen and (max-width: 1920px) {
    padding-bottom: 0;

    & > p {
      min-height: 0;
      &:first-child {
        font-size: 20px;
      }
      &:nth-child(2) {
        font-size: 13.5px;
      }
    }
    & > div {
      height: 5vh;
    }
  }

  @media screen and (max-width: 1024px) {
    & > p {
      &:first-child {
        font-size: 16px;
      }
      &:last-child {
        font-size: 12px;
      }
    }
    & > div {
      height: 3.5vh;
    }
  }

  @media screen and (max-width: 768px) {
    & > p {
      &:first-child {
        font-size: 14px;
      }
      &:last-child {
        font-size: 11px;
      }
    }
    & > div {
      height: 4vh;
    }
  }

  @media screen and (max-width: 414px) {
    & > p {
      &:first-child {
        font-size: 12px;
      }
      &:last-child {
        font-size: 10px;
      }
    }
  }

  @media screen and (max-width: 320px) {
    & > div {
      height: 5vh;
    }
  }
`

export const PortfolioThumbnail = styled.img`
  width: 100%;
  height: auto;

  @media screen and (max-width: 1024px) {
    margin-top: 2%;
  }
`
