import styled from "styled-components"
import Image from "next/image"

export const HomeBottomNavSection = styled.div`
  width: 100%;
  height: 20vh;
  min-height: 15rem;
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: black;
  padding: 3.5% 1.5% 0 1.5%;
  font-size: 13px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HomeBottomNav = styled.nav`
  width: 65%;
  height: 100%;
  display: flex;
`

export const HomeBottomNavMenus = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  margin-right: 9%;
  & > li:nth-child(1) {
    cursor: pointer;
    margin-bottom: 1.8rem;
  }

  & > li:not(:nth-child(1)) {
    cursor: pointer;
    margin-bottom: 30%;
  }
`

export const HomeFollowSection = styled.div`
  width: 35%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
`

export const HomeFollowTitle = styled.div`
  margin-bottom: 3%;
  width: 100%;
  font-size: 13.3px;
  @media screen and (max-width: 1920px) {
    font-size: 13.3px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 13.3px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`

export const HomeFollowOptions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomeFollowOption = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
`

export const HomeFollowOptionImage = styled(Image)`
  flex-shrink: 0;
`

export const Anchor = styled.a`
  margin: 1.4px;
  font-size: 13.3px;
  @media screen and (max-width: 1920px) {
    font-size: 13.3px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 13.3px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`

export const FollowIconCaption = styled.span`
  margin-left: 6%;
  padding: 1rem 0;
  font-size: 13px;
`
