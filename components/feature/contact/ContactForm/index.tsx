import { useCallback } from "react"
import useInput from "@hooks/useInput"
import {
  ContactEmailInput,
  ContactInputName,
  ContactMailForm,
  ContactContentArea,
  ContactSubmitButton,
} from "@components/feature/contact/ContactForm/styled"
import { serviceRepository } from "@apis/repositories"
import { parseNameFromEmail } from "@utils/email-validator"
import AlertModal from "@components/shared/AlertModal"
import useAlertModal from "@hooks/useAlertModal"

const ContactForm = () => {
  const [email, handleChangeEmail, setEmail] = useInput("")
  const [content, handleChangeContent, setContent] = useInput("")
  const [isAlert, setIsAlert, alertMessage, setAlertMessage] = useAlertModal()

  const handleSumbitContactForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!email.trim() || !content.trim()) return

      try {
        const nameInEmail = parseNameFromEmail(email)
        await serviceRepository.postContact(email, content)
        setIsAlert(true)
        setAlertMessage(`${nameInEmail}님! 소중한 의견 감사합니다.`)
        setEmail("")
        setContent("")
      } catch (error) {
        setIsAlert(true)
        setAlertMessage(error.message)
      }
    },
    [email, content, setEmail, setContent, setAlertMessage, setIsAlert],
  )

  return (
    <ContactMailForm onSubmit={handleSumbitContactForm}>
      {isAlert && <AlertModal setIsAlert={setIsAlert} message={alertMessage} />}

      <ContactInputName>E-Mail</ContactInputName>
      <ContactEmailInput
        placeholder="Please enter your email"
        value={email}
        onChange={handleChangeEmail}
      />

      <ContactInputName>Message</ContactInputName>
      <ContactContentArea
        placeholder="Please enter the information you would like to inquire about."
        value={content}
        onChange={handleChangeContent}
      />

      <ContactSubmitButton type="submit">SEND</ContactSubmitButton>
    </ContactMailForm>
  )
}

export default ContactForm
