import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 4%;
  background-color: black;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const HomeArtworkSection = styled.div`
  width: 100%;
  padding: 2% 0;
`

export const HomeModelViewerSection = styled.div`
  width: 100%;
  padding: 2% 0;
`

export const HomeVideoViewerSection = styled.video`
  display: block;
  width: 100%;
  padding: 2% 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HomeVideoViewerSectionMobile = styled.video`
  display: none;
  width: 100%;
  padding: 2% 0;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const HomeWhiteLine = styled.div`
  width: 100%;
  height: 0;
  border-top: 0.3px solid white;
`
