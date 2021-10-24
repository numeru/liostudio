import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react"
import {
  AlertMessage,
  AlertMessageBox,
  AlertWrapper,
  AlertModalCloseButton,
  AlertModalCloseImage,
} from "./styled"

type Props = {
  message: string
  setIsAlert: Dispatch<SetStateAction<boolean>>
  delay?: number
}

const AlertModal = ({ message, setIsAlert, delay = 3000 }: Props) => {
  const [display, setDisplay] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false)
      setIsAlert(false)
    }, delay)
    return () => clearTimeout(timer)
  }, [display, delay, setIsAlert])

  const handleClick = useCallback(() => {
    setDisplay(false)
    setIsAlert(false)
  }, [setIsAlert])

  return (
    <AlertWrapper display={display}>
      <AlertModalCloseButton onClick={handleClick}>
        <AlertModalCloseImage src="/images/shared/alert-x.svg" />
      </AlertModalCloseButton>
      <AlertMessageBox>
        <AlertMessage>{message}</AlertMessage>
      </AlertMessageBox>
    </AlertWrapper>
  )
}

export default AlertModal

// const [isAlert, setIsAlert, alertMessage, setAlertMessage] = useAlertModal()
// setIsAlert(true)
// setAlertMessage(`${nameInEmail}님! 소중한 의견 감사합니다.`)
// {isAlert && <AlertModal setIsAlert={setIsAlert} message={alertMessage} />}
