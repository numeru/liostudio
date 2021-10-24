import { useState, Dispatch, SetStateAction } from "react"

export default function useAlertModal(): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  string,
  Dispatch<SetStateAction<string>>,
] {
  const [isAlert, setIsAlert] = useState<boolean>(false)
  const [alertMessage, setAlertMessage] = useState<string>("")
  return [isAlert, setIsAlert, alertMessage, setAlertMessage]
}
