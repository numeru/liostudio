import styled from "styled-components"

export const AboutSection = styled.section`
  display: none;
  width: 100%;
  color: white;
  padding: 0;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    padding: 36px;
    display: flex;
  }
  @media screen and (max-width: 670px) {
    padding: 0;
  }
`

export const AboutImageBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const AboutImage = styled.img``

export const AboutDescription = styled.p`
  font-size: 12px;
  @media screen and (max-width: 1920px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 12.5px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 414px) {
    font-size: 10px;
  }
`
