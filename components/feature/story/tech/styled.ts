import styled from "styled-components"

export const TechContainer = styled.main`
  width: 100%;
  min-height: 82%;
  padding: 3.4% 8.6% 2% 8.6%;

  @media screen and (max-width: 1024px) {
    padding: 2.5% 0;
    border-bottom: 11px solid #f7f7f7;
  }
`

export const TechTitleSection = styled.div`
  width: 100%;
  padding: 5% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;

  & > h2 {
    font-size: 1.3vw;
    font-weight: bold;
    margin: 0;
  }

  @media screen and (max-width: 1920px) {
    & > h2 {
      font-size: 21px;
    }
  }

  @media screen and (max-width: 1428px) {
    & > h2 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 4% 7.6%;
    position: relative;
    border-bottom: 11px solid #f7f7f7;
    justify-content: flex-start;

    & > h2 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    & > h2 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 414px) {
    & > h2 {
      font-size: 16px;
    }
  }
`

export const TechListWrapper = styled.section`
  @media screen and (max-width: 1024px) {
    padding: 2% 7.6%;
  }
`

export const TechList = styled.ul`
  padding: 0;
  margin: 0;
`
