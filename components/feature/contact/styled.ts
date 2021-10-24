import styled from "styled-components"

export const ContactContainer = styled.div`
  padding: 0 4%;
  flex: 1;
  background-color: black;

  @media screen and (max-width: 1024px) {
    position: relative;
    padding: 9% 6%;
  }
`

export const ContactHeader = styled.header`
  position: relative;
  width: 100%;
  display: none;
  text-align: center;
  height: 6%;
  margin-bottom: 2%;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ContactTitle = styled.h4`
  color: white;
  margin: 0;
  font-size: 2.35vw;
  font-family: var(--font-helvetica-bold);

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 414px) {
    font-size: 0.94rem;
  }
`

export const ContactInfo = styled.div`
  color: white;
  display: flex;
  border-bottom: 1px solid white;
  height: 30vh;
  min-height: 12rem;
  letter-spacing: 0;

  @media screen and (max-width: 768px) {
    padding: 2% 0;
    height: 28vh;
  }

  @media screen and (max-height: 1400px) {
    height: 300px;
  }
`

export const ContactInfoKor = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2% 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: space-around;
    padding: 0;
  }
`

export const ContactInfoEng = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2% 0 2% 4%;
  font-family: var(--font-helvetica);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const ContactInfoAboutLio = styled.p`
  font-size: 0.677vw;
  margin-bottom: 4%;
  line-height: 1.5;

  @media screen and (max-width: 1920px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 12px;
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

export const ContactInfoAboutCEO = styled.p`
  font-size: 0.625vw;
  line-height: 1.5;

  @media screen and (max-width: 1920px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 11px;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  @media screen and (max-width: 414px) {
    /* SVG */
    font-size: 10px;
  }
`
