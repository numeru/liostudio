import styled from "styled-components"

export const NewsCard = styled.article`
  display: flex;
  color: white;
  border-top: 0.5px solid white;
  cursor: pointer;
  position: relative;
`

export const NewsDate = styled.p`
  height: 100%;
  width: 10%;
  margin: 0;
  padding: 1%;
  font-size: 0.63vw;
  font-family: var(--font-helvetica);

  @media screen and (max-width: 1920px) {
    padding: 1.5% 0 0 1.2%;
    font-size: 12px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 11px;
  }
  @media screen and (max-width: 736px) {
    display: none;
    font-size: 10px;
  }
`

export const NewsThumbnail = styled.img`
  border-left: 1px solid white;
  border-right: 1px solid white;
  height: auto;
  max-width: 40%;

  @media screen and (max-width: 736px) {
    border: 0;
    max-width: 100%;
  }
`

export const NewsDescription = styled.div`
  width: 50%;
  height: 100%;
  padding: 2.5%;

  & > p:nth-child(1) {
    font-size: 1.1vw;
    margin: 0 0 8% 0;

    @media screen and (max-width: 1920px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1428px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 736px) {
      font-size: 14px;
    }
  }
  & > p:nth-child(2) {
    font-size: 0.8vw;
    margin: 0;

    @media screen and (max-width: 1920px) {
      font-size: 13.5px;
    }
    @media screen and (max-width: 1428px) {
      font-size: 15px;
    }
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  & > p:nth-child(3) {
    width: 10%;
    font-size: 0.75rem;
    color: #7f7f7f;
    margin: 0;
    background-color: transparent;
    display: flex;
    align-items: stretch;
    position: absolute;
    bottom: 10%;

    @media screen and (max-width: 1024px) {
      font-size: 0.688rem;
    }

    & > span {
      margin-left: 2.4%;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 736px) {
    display: none;
  }
`

export const NewsReadMore = styled.img`
  margin-left: 6%;
`
