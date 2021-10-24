import styled from "styled-components"

type StyledProps = {
  checkPath: boolean
  isPathNews?: boolean
}

export const MoveOptionList = styled.aside`
  width: 100%;
  padding: ${({ checkPath }: StyledProps) => (checkPath ? "4% 0" : "4% 3.79%")};
  border-top: 0.5px solid
    ${({ checkPath }: StyledProps) => (checkPath ? "black" : "white")};
  background-color: ${({ checkPath }: StyledProps) =>
    checkPath ? "white" : "black"};

  @media screen and (max-width: 736px) {
    display: flex;
    align-items: center;
    height: 10%;
    ${({ isPathNews }: StyledProps) =>
      isPathNews ? "padding: 4% 6%;" : "padding: 4% 1%;"}
  }
`

export const MoveButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5.5%;

  & > button:nth-child(1) {
    justify-content: flex-start;
    padding: 0 1% 0 0;
    & > img {
      padding-right: 1vw;
    }
  }

  & > button:nth-child(2) {
    padding: 0 0 0 1%;
    justify-content: flex-end;
    & > img {
      padding-left: 1vw;
    }
  }

  @media screen and (max-width: 736px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const MoveButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ checkPath }: StyledProps) => (checkPath ? "black" : "white")};
  margin-bottom: 4%;
  font-size: 1.05vw;
  width: 10%;

  @media screen and (max-width: 1920px) {
    margin-bottom: 0;
    font-size: 17px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 736px) {
    font-size: 14px;
  }
  @media screen and (max-width: 414px) {
    font-size: 10px;
  }
`

export const MoveButtonImage = styled.img`
  width: 30%;
  height: auto;

  @media screen and (max-width: 1920px) {
    width: 44px;
  }

  @media screen and (max-width: 736px) {
    width: 25px;
  }

  @media screen and (max-width: 414px) {
    width: 13.5px;
  }
`
