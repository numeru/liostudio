import styled from "styled-components"

export const ArtworkContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120vh;

  @media screen and (max-width: 1024px) {
    min-height: 80vh;
  }
`
export const ArtworkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5%;
  width: 100%;
  padding: 0;
  margin: 0 0 2% 0;
`
