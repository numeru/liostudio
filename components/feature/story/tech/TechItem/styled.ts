import styled from "styled-components"

export const TechCard = styled.article`
  display: flex;
  border-bottom: 1px solid black;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    border-top: none;
    border-bottom: 1px solid #898989;
    padding-bottom: 2.5%;
  }
`

export const TechThumbnail = styled.img`
  height: auto;
  width: 40%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const TechDescription = styled.div`
  position: relative;
  flex: 1;
  padding: 2.5%;

  & > p:nth-child(1) {
    font-size: 20px;
    margin: 0 0 8% 0;
  }

  & > p:nth-child(2) {
    font-size: 13.5px;
    margin: 0 0 2% 0;
  }

  & > p:nth-child(3) {
    position: absolute;
    bottom: 4%;
    font-size: 12px;
    margin: 0;

    & > span {
      display: none;
    }
  }

  @media screen and (max-width: 1920px) {
    & > p:nth-child(1) {
      font-size: 20px;
    }

    & > p:nth-child(2) {
      font-size: 13.5px;
    }
    & > p:nth-child(3) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1428px) {
    & > p:nth-child(1) {
      font-size: 18px;
    }

    & > p:nth-child(2) {
      font-size: 13px;
    }
    & > p:nth-child(3) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 2.5% 0;

    & > p:nth-child(1) {
      font-size: 16px;
      margin: 0 0 2% 0;
    }

    & > p:nth-child(2) {
      font-size: 13.5px;
    }

    & > p:nth-child(3) {
      position: static;
      font-size: 12px;

      & > span {
        display: inline-block;
      }
    }
  }

  @media screen and (max-width: 768px) {
    & > p:nth-child(1) {
      font-size: 12px;
    }

    & > p:nth-child(2) {
      font-size: 0.625rem;
      display: none;
    }
    & > p:nth-child(3) {
      font-size: 11px;
    }
  }

  @media screen and (max-width: 414px) {
    & > p:nth-child(1) {
      font-size: 12px;
    }

    & > p:nth-child(2) {
      font-size: 0.625rem;
      display: none;
    }
    & > p:nth-child(3) {
      /* SVG */
      font-size: 10px;
    }
  }
`
