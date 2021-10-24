import styled from "styled-components"

export const AboutBackIcon = styled.img`
  display: none;
  width: 22px;
  height: 15px;
  position: absolute;
  left: 4%;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 414px) {
    left: 7%;
  }
`

export const AboutBackBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-top: 17px;
  @media screen and (max-width: 414px) {
    margin-top: 12px;
  }
`

export const AboutLioContainer = styled.div`
  padding: 2% 4%;
  height: 82%;
  min-height: 45rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: black;

  //* FONT
  font-size: 13px;
  line-height: 1.6;

  @media screen and (max-width: 1024px) {
    height: 100%;
    min-height: 80vh;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    padding: 0 4%;
  }
  @media screen and (max-width: 414px) {
    padding: 0 7%;
    font-size: 13.3px;
    line-height: 1.6;
  }
`

export const MobileAboutLioLogoImage = styled.img`
  display: none;
  margin: 0 auto;
  @media screen and (max-width: 670px) {
    display: block;
  }
`
