import styled from "styled-components"
import SpinLoader from "./SpinLoader"

type SingleSpinLoaderWrapperProps = {
  bg: string
}

const SingleSpinLoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: ${({ bg }: SingleSpinLoaderWrapperProps) => bg};
  z-index: 100;
`

type Props = {
  message?: string
  bg?: string
}

export default function SingleSpinLoader({
  message = "",
  bg = "black",
}: Props) {
  return (
    <SingleSpinLoaderWrapper bg={bg}>
      <SpinLoader message={message} />
    </SingleSpinLoaderWrapper>
  )
}
