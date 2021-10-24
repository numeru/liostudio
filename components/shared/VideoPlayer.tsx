// import SpinLoader from "@components/shared/SpinLoader"
// import { useCallback, useState } from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const Player = styled(ReactPlayer)`
  margin: 0 auto;
`

// const LoadingWrapper = styled.div`
//   width: 100%;
//   height: 60vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `

type Props = {
  src: string
}

export default function VideoPlayer({ src }: Props) {
  // const [isReady, setIsReady] = useState<boolean>()

  // const handleReady = useCallback(() => {
  //   setIsReady(true)
  // }, [])

  return (
    <>
      <Player
        url={src}
        width="100%"
        height="100%"
        playsinline
        loop
        playing
        // onReady={handleReady}
      />
      {/* {!isReady && (
        <LoadingWrapper>
          <SpinLoader />
        </LoadingWrapper>
      )} */}
    </>
  )
}
