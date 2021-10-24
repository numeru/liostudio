import styled from "styled-components"

export const NewsContainer = styled.main`
  width: 100%;
  min-height: 85vh;
  background-color: black;
  padding: 1% 0 0 0;

  @media screen and (max-width: 1024px) {
    padding: 2.5% 0 0 0;
  }
`

export const NewsTitleSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 7.5% 0;

  & > h2 {
    font-size: 1.3vw;
    margin: 0;
  }

  @media screen and (max-width: 1920px) {
    position: relative;
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
    & > h2 {
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
export const NewsDetailTitleSection = styled(NewsTitleSection)`
  margin: 3% 0 2% 0;

  & > h2 {
    @media screen and (max-width: 1920px) {
      font-size: 21px;
    }
    @media screen and (max-width: 1428px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 18px;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 414px) {
      font-size: 15px;
    }
  }
`

export const NewsList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;

  & > li:last-child > article {
    border-bottom: 0.5px solid white;
  }

  @media screen and (max-width: 736px) {
    display: flex;
    flex-wrap: wrap;
    & > li {
      width: 50%;

      &:nth-child(3) {
        border-bottom: 0.5px solid white;
      }

      &:nth-child(odd) {
        border-right: 0.5px solid white;
      }
    }
  }
`

export const NewsItemContainer = styled(NewsContainer)`
  padding: 0 10% 5% 10%;
  min-height: 80vh;

  @media screen and (max-width: 1024px) {
    padding: 0 9% 5% 9%;
    position: relative;
  }
`

export const NewsItemContent = styled.section`
  width: 100%;

  & > h3 {
    font-size: 1.2vw;
    font-weight: normal;
    color: white;
    text-align: center;
    margin-bottom: 4%;

    @media screen and (max-width: 1920px) {
      font-size: 19px;
    }

    @media screen and (max-width: 1428px) {
      font-size: 18px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }

    @media screen and (max-width: 768px) {
      font-size: 13px;
    }

    @media screen and (max-width: 414px) {
      font-size: 11px;
    }
  }

  & > p {
    color: white;
    font-size: 0.78vw;
    margin: 5% 0;
    padding: 0 0.5%;

    @media screen and (max-width: 1920px) {
      font-size: 15px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 13.5px;
    }

    @media screen and (max-width: 768px) {
      font-size: 11px;
    }

    @media screen and (max-width: 414px) {
      font-size: 10px;
    }
  }
`

export const NewsItemsPoster = styled.img`
  width: 100%;
  height: auto;
`

export const RecentNewsList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0 0 2% 0;
  width: 100%;

  & > li {
    width: 33%;
    cursor: pointer;
  }

  & > li:nth-child(2) {
    margin: 0 0.97%;
  }

  @media screen and (max-width: 736px) {
    display: none;
  }
`
export const RecentNewsThumb = styled.img`
  width: 100%;
  height: auto;
`
