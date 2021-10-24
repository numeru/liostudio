import Loader from "react-loader-spinner"
import styled from "styled-components"

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ErrorMessage = styled.p`
  font-size: large;
  margin: 10px;
  color: #e0180e;
`

type Props = {
  message?: string
}

export default function SpinLoader({ message = "" }: Props) {
  return (
    <LoaderWrapper>
      <Loader
        type="MutatingDots"
        color="#E0180E"
        secondaryColor="#E0180E"
        height={100}
        width={100}
      />
      {message && <ErrorMessage>{message}</ErrorMessage>}
    </LoaderWrapper>
  )
}
