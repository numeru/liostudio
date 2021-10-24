import { useRouter } from "next/router"
import React, { ReactNode, useMemo } from "react"
import {
  MoveButton,
  MoveButtonImage,
  MoveButtons,
  MoveOptionList,
} from "./styled"

type Props = {
  children?: ReactNode
  handlePrevButton: () => void
  handleNextButton: () => void
}

const MovePageButtons = ({
  children = null,
  handlePrevButton,
  handleNextButton,
}: Props) => {
  const router = useRouter()
  const { pathname } = router

  const checkPath = useMemo(
    (): boolean => pathname.slice(1, 6) === "story",
    [pathname],
  )

  const isPathNews = useMemo(
    (): boolean => pathname.slice(1, 5) === "news",
    [pathname],
  )

  return (
    <MoveOptionList checkPath={checkPath} isPathNews={isPathNews}>
      <MoveButtons>
        <MoveButton onClick={handlePrevButton} checkPath={checkPath}>
          <MoveButtonImage
            src={`/images/shared/arrow-left${checkPath ? "-black" : ""}.svg`}
            alt="arrow_left_button"
          />
          PREVIOUS
        </MoveButton>
        <MoveButton onClick={handleNextButton} checkPath={checkPath}>
          NEXT
          <MoveButtonImage
            src={`/images/shared/arrow-right${checkPath ? "-black" : ""}.svg`}
            alt="arrow_right_button"
          />
        </MoveButton>
      </MoveButtons>
      {children}
    </MoveOptionList>
  )
}

export default MovePageButtons
