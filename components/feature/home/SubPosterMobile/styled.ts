import styled from "styled-components"

type PosterProps = {
  src: string
}

export const Wrapper = styled.div`
  display: none;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`

export const SubTitle = styled.div`
  font-size: 12px;
  text-align: center;
  margin: 4rem 0 0 0;
  @media (max-width: 1920px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 414px) {
    /* SVG */
    font-size: 10px;
  }
`

export const Title = styled.div`
  font-size: 15px;
  text-align: center;
  margin: 1rem 0 5rem 0;
  @media (max-width: 1920px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 441px) {
    font-size: 10px;
  }
`

export const Poster = styled.figure`
  height: 0;
  margin: 0;
  padding-bottom: 50%;
  background-image: url(${({ src }: PosterProps) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 2%;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Description = styled.p`
  text-align: center;
  color: white;
  height: 10%;
  margin: 50px 0;
  font-size: 16px;
  line-height: 150%;
  opacity: 0.9;
  padding: 6px 0;

  @media (max-width: 1024px) {
    font-size: 17.3px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 441px) {
    font-size: 10px;
  }
`
