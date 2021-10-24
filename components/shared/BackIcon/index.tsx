import { useRouter } from "next/router"
import React, { useMemo } from "react"
import styled from "styled-components"

type StyledProps = {
  checkPath: boolean
}
export const AppMoBackIcon = styled.img`
  display: none;
  position: absolute;
  top: ${({ checkPath }: StyledProps) => (checkPath ? "1.4%" : "6%")};
  transform: translateY(-50%);
  left: 6%;
  width: 3.5vw;
  min-width: 1.2rem;
  height: auto;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: block;
  }

  @media screen and (max-width: 768px) {
    top: ${({ checkPath }: StyledProps) => (checkPath ? "1.3%" : "5.5%")};
  }

  @media screen and (max-width: 414px) {
    top: ${({ checkPath }: StyledProps) => (checkPath ? "1%" : "4.5%")};
  }
`

const BackIcon = () => {
  const router = useRouter()

  const backToPreviousPage = () => router.back()

  const { pathname } = router

  const checkPath = useMemo(
    (): boolean => pathname.slice(1, 6) === "story",
    [pathname],
  )

  return (
    <AppMoBackIcon
      src={`/images/shared/back-icon${checkPath ? "-black" : ""}.svg`}
      alt="back-icon"
      onClick={backToPreviousPage}
      checkPath={checkPath}
    />
  )
}

export default BackIcon
