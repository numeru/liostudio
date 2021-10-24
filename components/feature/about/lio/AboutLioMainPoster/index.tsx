import styled from "styled-components"
import { AboutImage } from "../AboutLioInfo/styled"

const AboutImageBoxTablet = styled.div`
  display: none;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: 670px) {
    display: none;
  }
`

const AboutMainPosterWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50%;
    max-width: 40rem;
    justify-content: space-between;
  }
  @media screen and (max-width: 670px) {
    justify-content: center;
  }
`

const AboutMainPosterImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    min-width: 448px;
    width: 448px;
    height: 354px;
    /* max-width: 40rem; */
  }
  @media screen and (max-width: 487px) {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }
`

const AboutLioMainPoster = () => {
  return (
    <AboutMainPosterWrapper>
      <AboutImageBoxTablet>
        <AboutImage
          src="/images/about/lio-desc-1.png"
          alt="desc"
          width="184.24"
          height="184.24"
        />
        <AboutImage
          src="/images/about/lio-desc-2.png"
          alt="desc"
          width="184.24"
          height="184.24"
        />
      </AboutImageBoxTablet>
      <AboutMainPosterImage src="/images/about/lio-artwork.png" alt="artwork" />
    </AboutMainPosterWrapper>
  )
}

export default AboutLioMainPoster
