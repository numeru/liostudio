import styled from "styled-components"

export const DarkModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  overflow: hidden;
`

export const ModalCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 1024px) {
    position: relative;
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8%;
  right: 8%;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  width: 2.5%;
  min-width: 1.9rem;
  font-size: 200%;
  padding: 0;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    top: -14%;
    right: -19.3%;
  }

  @media screen and (max-width: 768px) {
    right: -13.9%;
  }

  @media screen and (max-width: 414px) {
    min-width: 1.4rem;
  }
`

export const ModalCloseImage = styled.img`
  width: 100%;
  height: auto;
`
