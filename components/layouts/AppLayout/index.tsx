import { ReactNode, useMemo } from "react"
import styled from "styled-components"
import Header from "@components/layouts/AppLayout/Header"
import Footer from "@components/layouts/AppLayout/Footer"
import { useRouter } from "next/router"

type Props = {
  children: ReactNode
}

type StyledProps = {
  checkPath: boolean
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ checkPath }: StyledProps) =>
    checkPath ? "white" : "black"};
`

const AppLayout = ({ children }: Props) => {
  const router = useRouter()
  const { pathname } = router

  const checkPath = useMemo(
    (): boolean => pathname.slice(1, 6) === "story",
    [pathname],
  )

  return (
    <AppWrapper checkPath={checkPath}>
      <Header />
      {children}
      <Footer checkPath={checkPath} />
    </AppWrapper>
  )
}

export default AppLayout
