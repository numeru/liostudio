import styled from "styled-components"

export const TechDetailContainer = styled.main`
  padding: 9%;
  padding-bottom: 4%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1024px) {
    padding: 1% 8%;
    position: relative;
    border-bottom: 11px solid #f7f7f7;
  }
  @media screen and (max-width: 414px) {
    font-size: 10px;
  }
`

export const TechDetailContentWrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const TechDetailContent = styled.div`
  height: 100vh;
  padding-bottom: 4%;
  border-bottom: 1px solid black;

  @media screen and (max-width: 1024px) {
    overflow-y: visible;
    height: auto;
  }
`

export const TechDetailHeader = styled.header`
  @media screen and (max-width: 1024px) {
    position: relative;
    text-align: center;
    padding-top: 7.6%;
  }
`

export const TechDetailTitle = styled.p`
  margin: 0 0 3% 0;
  font-size: 1.313rem;
  font-family: var(--font-helvetica);

  @media screen and (max-width: 1920px) {
    font-size: 21px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 414px) {
    font-size: 15px;
  }
`

export const TechDetailDate = styled.p`
  margin: 0 0 3.6% 0;
  font-size: 0.75rem;
  font-family: var(--font-helvetica);

  @media screen and (max-width: 1920px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 414px) {
    /* SVG */
    font-size: 10px;
  }
`
