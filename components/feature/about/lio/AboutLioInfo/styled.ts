import styled from "styled-components"

export const AboutSection = styled.div`
  width: 50%;
  color: white;
  display: flex;
  padding: 0 4% 0 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const AboutImageBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const AboutImage = styled.img``

export const AboutDescription = styled.p`
  font-size: 13px;
  height: 300px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
