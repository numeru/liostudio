import styled from "styled-components"

type AlertWrapperProps = {
  display: boolean
}

export const AlertWrapper = styled.div`
  display: ${({ display }: AlertWrapperProps) => (display ? "block" : "none")};
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, 0);
  background-color: rgb(224, 24, 14);
  width: 537px;
  height: 155px;
  border: 1px solid #000000 !important;

  -webkit-box-shadow: 5px 5px 18px -1px rgba(0, 0, 0, 0.53);
  box-shadow: 5px 5px 18px -1px rgba(0, 0, 0, 0.53);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const AlertModalCloseButton = styled.div`
  padding: 17px 18px 0 0;
  width: 100%;
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: flex-end;
`

export const AlertModalCloseImage = styled.img`
  width: 43px;
  height: 43px;
  color: black;
  cursor: pointer;
`

export const AlertMessageBox = styled.div`
  width: 100%;
  margin-top: 11px;
  text-align: center;
  border: 0;
`

export const AlertMessage = styled.span`
  font-size: 14px;
`
