import styled from "styled-components"
export const StudioContainer = styled.div`
  display: flex;
  flex: 1;
  color: white;
  padding: 8% 6%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0 9.2% 8% 9.2%;
    justify-content: flex-start;
    position: relative;
  }
`

export const StudioHeader = styled.header`
  display: none;
  position: relative;
  width: 100%;
  padding: 12% 0;
  text-align: center;
  color: white;
  margin-bottom: 2%;

  & > p {
    &:nth-child(2) {
      margin: 0 0 2% 0;
      font-size: 0.938rem;
    }
    &:nth-child(3) {
      font-size: 0.813rem;
    }
  }

  @media screen and (max-width: 1920px) {
    & > p {
      &:nth-child(2) {
        font-size: 1.25rem;
      }
      &:nth-child(3) {
        font-size: 0.95rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    & > p {
      &:nth-child(1) {
        font-size: 18px;
      }
      &:nth-child(2) {
        font-size: 16px;
      }
    }
    display: block;
  }
  @media screen and (max-width: 768px) {
    & > p {
      &:nth-child(1) {
        font-size: 16px;
      }
      &:nth-child(2) {
        font-size: 14px;
      }
    }
    display: block;
  }
  @media screen and (max-width: 414px) {
    & > p {
      &:nth-child(1) {
        font-size: 15px;
      }
      &:nth-child(2) {
        font-size: 13px;
      }
    }
    display: block;
  }
`

export const StudioSlideWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const StudioThumbSlide = styled.div`
  width: 19%;
  min-width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3%;

  & > button {
    &:first-child {
      margin-bottom: 18%;
    }
    &:last-child {
      margin-top: 20%;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 12%;
    min-width: 32px;
    margin-right: 12%;
  }

  @media screen and (max-width: 414px) {
    width: 17%;
    margin-right: 0;
  }
`

export const StudioSlideButton = styled.button`
  width: 40%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    width: 2rem;
  }
`

export const StudioSlideButtonImage = styled.img`
  width: 100%;
  height: auto;
`

export const StudioImageList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;

  & > li:nth-child(2) {
    margin: 12% 0;
  }
`

export const StudioThumbImageWrapper = styled.li`
  width: 100%;
  cursor: pointer;
`

export const StudioThumbImage = styled.img`
  width: 100%;
  height: auto;
`

export const StudioMemberImage = styled.img`
  width: 85%;
  min-width: 360px;
  height: auto;

  @media screen and (max-width: 1024px) {
    width: 50%;
    min-width: 200px;
  }

  @media screen and (max-width: 414px) {
    width: 80%;
  }
`

export const StudioMemberInfo = styled.div`
  flex: 1;
  & > p {
    width: 100%;
    &:nth-child(1) {
      font-size: 1.25rem;
    }
    &:nth-child(2) {
      font-size: 1.063rem;
      margin-bottom: 8%;
    }
    &:nth-child(3) {
      font-size: 0.75rem;
      margin-bottom: 5%;
    }
    &:nth-child(4) {
      font-size: 0.75rem;
    }
  }
  @media screen and (max-width: 1920px) {
    & > p {
      &:nth-child(1) {
        font-size: 21px;
      }
      &:nth-child(2) {
        font-size: 18px;
        margin-bottom: 8%;
      }
      &:nth-child(3) {
        font-size: 14px;
        margin-bottom: 5%;
      }
      &:nth-child(4) {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 1428px) {
    & > p {
      &:nth-child(1) {
        font-size: 19px;
      }
      &:nth-child(2) {
        font-size: 19px;
        margin-bottom: 8%;
      }
      &:nth-child(3) {
        font-size: 14px;
        margin-bottom: 5%;
      }
      &:nth-child(4) {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex: none;
    margin-top: 12%;

    & > p {
      width: 100%;
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        margin-bottom: 7%;
        font-size: 13px;
      }
      &:nth-child(4) {
        margin-bottom: 7%;
        font-size: 13px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    & > p {
      &:nth-child(3) {
        font-size: 11px;
      }
      &:nth-child(4) {
        font-size: 11px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    & > p {
      &:nth-child(3) {
        font-size: 10px;
      }
      &:nth-child(4) {
        font-size: 10px;
      }
    }
  }
`
