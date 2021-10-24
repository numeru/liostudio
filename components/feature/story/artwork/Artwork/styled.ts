import styled from "styled-components"

export const ArtworkItem = styled.li`
  position: relative;
  width: 24.625%;
  margin-bottom: 0.5%;
  cursor: pointer;

  &:hover {
    & > div {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 33%;
  }

  @media screen and (max-width: 768px) {
    width: 49.5%;
  }
`

export const ArtworkTumbnail = styled.img`
  width: 100%;
  height: 100%;
`
export const ArtworkDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 200ms ease-in;
  color: white;
  font-size: 14px;

  @media screen and (max-width: 1428px) {
    font-size: 13px;
  }

  & > span:first-child {
    width: 100%;
    text-align: center;
    &:after {
      content: "";
      display: block;
      position: relative;
      left: 50%;
      width: 2%;
      height: 2%;
      transform: translateX(-50%);
      background-color: white;
      margin: 4% 0;
    }
  }

  & > span:last-child {
    margin-top: 4%;
  }
`
