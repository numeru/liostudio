import styled from "styled-components"

type PosterProps = {
  src: string
}

export const Wrapper = styled.div`
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Title = styled.div`
  text-align: center;
  margin: 3rem 0 1rem 0;
  font-size: 16px;
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
`

export const Description = styled.p`
  width: 30%;
  color: white;
  height: 10%;
  margin: 0;
  font-size: 15px;
  line-height: 1.3;
  opacity: 0.9;
  padding: 6px 0;
  @media screen and (max-width: 1920px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`

export const BlankBox = styled.div`
  width: 10%;
`

export const PosterDescription = styled.p`
  width: 60%;
  color: white;
  height: 10%;
  margin: 0;
  font-size: 14px;
  line-height: 1.3;
  opacity: 0.9;
  padding: 6px 0;
`
