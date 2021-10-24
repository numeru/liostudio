import styled from "styled-components"

export const AppHeader = styled.header`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5%;
  background-color: white;
  border-bottom: 1px solid black;
  font-family: var(--font-helvetica);
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    padding: 0 3%;
    min-height: 4rem;
  }
`

export const AppLogoImage = styled.img`
  cursor: pointer;
  width: 8%;
  min-width: 6rem;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 30%;
    min-width: 0;
    max-width: 8rem;
    padding: 4.2% 0;
  }
`

export const AppNav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding: 2.5% 0;

  @media screen and (max-width: 1024px) {
    width: 0;
  }

  @media screen and (min-width: 1025px) {
    position: relative;
  }
`

export const AppMenuList = styled.ul`
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const AppMenuItem = styled.a`
  cursor: pointer;
  padding: 1rem;
  color: black;
  font-size: 17px;

  @media screen and (max-width: 1920px) {
    font-size: 15px;
  }

  &:hover,
  &:active {
    color: black;
    opacity: 1;
  }
`

export const AppToggleMenuButton = styled.button`
  position: absolute;
  padding: 0;
  width: 2.5%;
  border: none;
  flex-shrink: 0;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    left: 3%;
    width: 6%;
  }

  @media screen and (min-width: 1025px) {
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
`

export const AppDetailNav = styled.nav`
  display: block;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #404040;
  width: 50%;
  height: 11rem;
  color: white;
  z-index: 2;
  opacity: 0.9;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const AppDetailSection = styled.section`
  flex: 1 1 auto;
  width: calc((98% - 1.2rem) / 2);
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin-right: auto;
`

export const AppDetailMenuList = styled.ul`
  padding: 1rem 0;
  margin: 0 0 0 4%;

  & > li {
    margin: 1.2rem 0;
  }

  @media screen and (min-width: 1920px) {
    margin: 0 0 0 2%;
  }
`

export const AppDetailMenuItem = styled.a`
  font-size: 0.813rem;
  opacity: 0.8;
  cursor: pointer;
  padding: 1% 4%;

  @media screen and (max-width: 1920px) {
    font-size: 14.5px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 14.5px;
  }
`

export const AppDetailNavMo = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  background-color: black;
  opacity: 0.8;
  width: 40%;
  height: 100vh;
  overflow-y: scroll;
  color: white;
  z-index: 2;
  padding: 8%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`

export const AppDetailMenuListMo = styled.ul`
  width: 100%;
  padding: 8% 0;
  border-bottom: 1px solid white;
  margin: 8% 0;

  & > li:nth-child(1) {
    font-size: 15px;
    margin-bottom: 18%;
  }

  & > li:not(:nth-child(1)) {
    font-size: 0.813rem;
    margin-bottom: 12%;
    font-family: var(--font-helvetica);
    font-weight: 400;
  }

  & > li:last-child {
    font-size: 0.813rem;
    margin-bottom: 16%;
    font-family: var(--font-helvetica);
  }

  @media screen and (max-width: 1024px) {
    & > li:nth-child(1) {
      font-size: 15px;
    }

    & > li:not(:nth-child(1)) {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 768px) {
    & > li:nth-child(1) {
      font-size: 14px;
    }

    & > li:not(:nth-child(1)) {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 414px) {
    & > li:nth-child(1) {
      font-size: 14px;
    }

    & > li:not(:nth-child(1)) {
      font-size: 11px;
    }
  }
`

export const AppDetailMenuFollowMo = styled.span`
  font-size: 12px;
  margin-bottom: 8%;
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 414px) {
    /* SVG */
    font-size: 10px;
  }
`

export const AppFollowImagesMo = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 4.5rem;
  margin-bottom: 5%;
`

export const AppFollowImage = styled.img`
  width: 25%;
  height: auto;
`
