import styled from "styled-components"

type AppFooterProps = {
  checkPath: boolean
}

export const AppFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5% 3%;
  background-color: ${({ checkPath }: AppFooterProps) =>
    checkPath ? "white" : "black"};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    background-color: white;
    color: black;
    align-items: flex-start;
    justify-content: center;
    line-height: 0.7rem;
    padding: 2.5% 5%;
  }

  @media screen and (max-width: 767px) {
    text-align: left;
    padding: 6.5% 5%;
  }
`

export const AppInfoLeft = styled.span`
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    align-items: flex-start;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const AppInfo = styled.p`
  font-size: 0.7rem;
  color: #7f7f7f;

  &:nth-child(1) {
    margin-right: 1%;
  }

  @media screen and (max-width: 1920px) {
    margin: 0;
    font-size: 13.3px;

    &:nth-child(1) {
      margin-right: 0.5%;
    }
  }
  @media screen and (max-width: 1428px) {
    margin: 0;
    font-size: 13px;

    &:nth-child(1) {
      margin-right: 0.5%;
    }
  }
  @media screen and (max-width: 1024px) {
    margin: 0;
    font-size: 13px;

    &:nth-child(1) {
      margin-right: 0.5%;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 10px;

    &:nth-child(1) {
      margin-right: 0.5%;
    }
  }
  @media screen and (max-width: 414px) {
    margin: 0;
    /* SVG */
    font-size: 10px;

    &:nth-child(1) {
      margin-right: 0.5%;
    }
  }
`
