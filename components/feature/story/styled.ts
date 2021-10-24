import styled from "styled-components"

type StyledProps = {
  selected: boolean
}

export const ArtContainer = styled.main`
  padding: 3.4% 4% 0 4%;
  min-height: 90%;

  @media screen and (max-width: 1024px) {
    padding: 2.5% 5.5% 0 5.5%;
  }
`

export const ArtTitleSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-helvetica);
  padding: 4.5% 0 2.2% 0;

  & > h2 {
    font-size: 1.3vw;
    font-weight: bold;
    margin: 0;
  }

  @media screen and (max-width: 1920px) {
    & > h2 {
      font-size: 21px;
      margin: 0;
    }
  }
  @media screen and (max-width: 1428px) {
    & > h2 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-bottom: 0;
    justify-content: flex-start;
    & > h2 {
      font-weight: bold;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    & > h2 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 414px) {
    & > h2 {
      font-size: 15px;
    }
  }
`

export const ArtCategoryList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20%;
  margin-bottom: 3%;
  font-family: var(--font-helvetica);
  font-size: 0.85rem;

  @media screen and (max-width: 1024px) {
    margin: 4% 0 5% 0;
    padding: 0;
    justify-content: flex-start;

    & > li:not(:last-child) {
      margin-right: 8%;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 4% 0 6% 0;
    padding: 0;
    justify-content: flex-start;
    overflow-x: scroll;

    & > li:not(:last-child) {
      margin-right: 6%;
    }
  }
`

export const ArtCategoryItem = styled.li`
  & > button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 0.813rem;
    color: ${({ selected }: StyledProps) => (selected ? "black" : "#B1B1B1")};
  }

  @media screen and (max-width: 1920px) {
    & > button {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1428px) {
    & > button {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    & > button {
      font-size: 13.5px;
      text-align: left;
      padding: 0 100% 0 0;
    }
  }

  @media screen and (max-width: 768px) {
    & > button {
      font-size: 13px;
      padding: 0 10% 0 0;
    }
  }
  @media screen and (max-width: 414px) {
    & > button {
      font-size: 11px;
      padding: 0 10% 0 0;
    }
  }
`

export const PortfolioDetailContainer = styled.main`
  padding: 7% 4% 4% 4%;

  @media screen and (max-width: 1024px) {
    padding: 3.5% 6%;
    position: relative;
    border-bottom: 11px solid #f7f7f7;
  }
`

export const PortfolioDetailTitleSection = styled.div`
  display: none;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 4% 0;

  & > h2 {
    font-size: 0.938rem;
    font-family: var(--font-helvetica);
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    position: relative;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 414px) {
    font-size: 15px;
  }
`

export const PortfolioDetailContent = styled.section`
  padding: 0 15%;

  & > p {
    &:first-child {
      margin: 0 0 2.5% 0;
      font-size: 1.25rem;
    }

    &:nth-child(2) {
      margin: 0 0 1% 0;
      font-size: 0.813rem;
    }
  }

  @media screen and (max-width: 1920px) {
    & > p {
      &:first-child {
        font-size: 21px;
      }

      &:nth-child(2) {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 1428px) {
    & > p {
      &:first-child {
        font-size: 17px;
      }

      &:nth-child(2) {
        font-size: 13.5px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0;

    & > p {
      font-family: var(--font-helvetica);

      &:first-child {
        font-size: 20px;
        text-align: center;
      }

      &:nth-child(2) {
        font-size: 13px;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 414px) {
    & > p {
      &:first-child {
        font-size: 13px;
      }

      &:nth-child(2) {
        font-size: 10px;
      }
    }
  }
`

export const ArtProjectContainer = styled.main`
  padding: 6.7% 24.2% 0 24.2%;

  @media screen and (max-width: 1024px) {
    padding: 0 6.5%;
    position: relative;
  }
`

export const ArtProjectDescription = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;

  & > h2 {
    margin: 0 0 1% 0;
    font-size: 1.31vw;
    font-family: var(--font-helvetica);
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 8% 0;

    & > h2 {
      margin: 0;
      font-size: 2.48vw;
    }
  }

  @media screen and (max-width: 768px) {
    & > h2 {
      font-size: 3.65vw;
    }
  }
`
