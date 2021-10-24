import styled from "styled-components"

export const ContactMailForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 60vh;
  min-height: 30rem;
  padding: 3% 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 3rem 0;
  }
`

export const ContactInputName = styled.span`
  color: white;
  font-size: 0.9rem;
  margin-bottom: 20px;
  margin-top: 8px;
  font-family: var(--font-helvetica);

  @media screen and (max-width: 1920px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 414px) {
    /* SVG */
    font-size: 10px;
  }
`

export const ContactEmailInput = styled.input`
  background-color: transparent;
  color: white;
  outline: none;
  border: 1px solid white;
  font-size: 0.9rem;
  height: 11%;
  margin-bottom: 4%;
  padding: 1.5rem;
  font-family: var(--font-helvetica);
  border-radius: 0 !important;

  @media screen and (max-width: 1920px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 414px) {
    /* SVG */
    font-size: 10px;
  }

  @media screen and (max-height: 1400px) {
    height: 51px;
  }
`

export const ContactContentArea = styled.textarea`
  background-color: transparent;
  color: white;
  outline: none;
  border: 1px solid white;
  height: 50%;
  padding: 1.5rem;
  font-size: 0.625rem;
  margin-bottom: 2%;
  font-family: var(--font-helvetica);
  resize: none;
  border-radius: 0 !important;

  @media screen and (max-width: 1920px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 414px) {
    /* SVG */
    font-size: 10px;
  }

  @media screen and (max-height: 1400px) {
    height: 240px;
  }
`

export const ContactSubmitButton = styled.button`
  width: 16%;
  min-width: 100px;
  padding: 2% 0;
  background-color: transparent;
  color: white;
  outline: none;
  border: 1px solid white;
  font-size: 0.813rem;
  cursor: pointer;
  font-family: var(--font-helvetica);

  @media screen and (max-width: 1920px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 414px) {
    font-size: 10px;
  }
`
