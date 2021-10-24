import AppLayout from "@components/layouts/AppLayout"
import ContactForm from "@components/feature/contact/ContactForm"
import {
  ContactContainer,
  ContactInfo,
  ContactInfoAboutLio,
  ContactInfoAboutCEO,
  ContactInfoKor,
  ContactInfoEng,
  ContactTitle,
  ContactHeader,
} from "@components/feature/contact/styled"
import BackIcon from "@components/shared/BackIcon"

export default function Contact() {
  return (
    <AppLayout>
      <ContactContainer>
        <BackIcon />
        <ContactHeader>
          <ContactTitle>CONTACT</ContactTitle>
        </ContactHeader>

        <ContactInfo>
          <ContactInfoKor>
            <ContactInfoAboutLio>
              LIO STUDIO는 Look, Identity of ____________ 의 약자로, 20대
              디자이너들이 함께 모여 다양한 이야기를 담아내는 커뮤니티
              플랫폼입니다. 오프라인 커뮤니티를 개최했던 두차례의 행사 뒤에 현재
              예술가를 위한 소셜미디어 플랫폼을 기획자, 개발자, 디자이너,
              마케터들과 함께 기획하고 개발하고 있습니다.
            </ContactInfoAboutLio>

            <ContactInfoAboutCEO>
              대표자 | 윤상석, 윤예림
              <br />
              이메일 | liodesign.official@gmail.com
              <br />
              인스타그램 | @lio__studio @whatliogazes
            </ContactInfoAboutCEO>
          </ContactInfoKor>
          <ContactInfoEng>
            <ContactInfoAboutLio>
              LIO STUDIO stands for Look, Identity of ____________ , a community
              platform where designers in their 20s gather together to capture
              various stories. After two events that held offline communities,
              we are currently planning and developing social media platforms
              for artists with planners, developers, designers, and marketers.
            </ContactInfoAboutLio>

            <ContactInfoAboutCEO>
              CEO | Yoon Sang Seok, Yoon Ye Rim
              <br />
              E-MAIL | liodesign.official@gmail.com
              <br />
              INSTAGRAM | @lio__studio @whatliogazes
            </ContactInfoAboutCEO>
          </ContactInfoEng>
        </ContactInfo>
        <ContactForm />
      </ContactContainer>
    </AppLayout>
  )
}
