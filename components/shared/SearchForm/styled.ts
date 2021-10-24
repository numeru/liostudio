import styled from "styled-components"

type StyledProps = {
  checkPath: boolean
}

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  width: 18%;
  min-width: 16rem;
  height: 2.4vw;
  min-height: 2.2rem;
  border: 1px solid
    ${({ checkPath }: StyledProps) => (checkPath ? "black" : "white")};
  padding: 0 1.6% 0 2.4%;
  font-size: 13.3px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  flex: 1;
  height: 80%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ checkPath }: StyledProps) => (checkPath ? "black" : "white")};
  padding: 0 2.4%;
  font-size: 0.5vw;
  font-family: var(--font-helvetica);

  &::placeholder {
    color: #707070;
  }

  @media screen and (max-width: 1920px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`

export const SearchButton = styled.button`
  position: absolute;
  left: ${({ checkPath }: StyledProps) => (checkPath ? "1%" : "3.5%")};
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  width: 0.8vw;
  height: 0.86vw;
  min-width: 0.8rem;
  min-height: 0.86rem;
  cursor: pointer;
`

export const SearchIcon = styled.img`
  width: 100%;
  min-width: 0.8rem;
`
