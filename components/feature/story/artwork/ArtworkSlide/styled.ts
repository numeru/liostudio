import styled from "styled-components"

export const ArtworkImage = styled.img`
  width: 100%;
  height: auto;
`

export const SlideLeftButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  width: 2.5%;
  min-width: 2rem;
  left: 8%;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    left: -20%;
  }

  @media screen and (max-width: 768px) {
    left: -15%;
  }

  @media screen and (max-width: 414px) {
    min-width: 1.4rem;
  }
`

export const SlideRightButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  width: 2.5%;
  min-width: 2rem;
  right: 8%;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    right: -20%;
  }

  @media screen and (max-width: 768px) {
    right: -15%;
  }

  @media screen and (max-width: 414px) {
    min-width: 1.4rem;
  }
`

export const SlideButtonImage = styled.img`
  width: 100%;
  height: auto;
  opacity: 0.8;
`

export const ArtworkTitle = styled.h3`
  display: none;
  position: absolute;
  top: -15%;
  left: 50%;
  width: 100%;
  text-align: center;
  margin: 0 0 1% 0;
  transform: translateX(-50%);
  color: white;
  font-size: 2.35vw;

  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 18px;
  }
  @media screen and (max-width: 414px) {
    display: block;
    font-size: 14px;
  }
`

export const ArtworkCategory = styled.p`
  margin: 0;
  color: white;
  display: none;
  bottom: -20%;
  position: absolute;
  font-size: 1.96vw;

  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 16px;
  }
  @media screen and (max-width: 414px) {
    display: block;
    font-size: 10px;
  }

  &:before {
    content: "";
    display: block;
    position: relative;
    left: 50%;
    width: 0.8vw;
    height: 0.1vw;
    transform: translateX(-50%);
    margin-bottom: 25%;
    background-color: white;
  }
`
