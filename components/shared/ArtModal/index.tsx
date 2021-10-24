import React, { useCallback, ReactNode } from "react"
import {
  DarkModalContainer,
  ModalCard,
  ModalCloseButton,
  ModalCloseImage,
} from "@components/shared/ArtModal/styled"

type Props = {
  children: ReactNode
  onCloseModal: () => void
}

const Modal = ({ children, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation()
  }, [])

  return (
    <DarkModalContainer onClick={onCloseModal}>
      <ModalCard onClick={stopPropagation}>
        {children}
        <ModalCloseButton type="button" onClick={onCloseModal}>
          <ModalCloseImage src="/images/shared/close-icon.svg" />
        </ModalCloseButton>
      </ModalCard>
    </DarkModalContainer>
  )
}

export default Modal
