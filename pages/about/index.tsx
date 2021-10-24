import { useCallback } from "react"
import AppLayout from "@components/layouts/AppLayout"
import AboutLioMainPoster from "@components/feature/about/lio/AboutLioMainPoster"
import AboutLioInfo from "@components/feature/about/lio/AboutLioInfo"
import AboutLioInfoTeplet from "@components/feature/about/lio/AboutLioInfoTeplet"
import {
  AboutBackBox,
  AboutLioContainer,
  MobileAboutLioLogoImage,
  AboutBackIcon,
} from "@components/feature/about/lio/styled"
import { useRouter } from "next/router"

export default function AboutLioPage() {
  const router = useRouter()

  const backToPreviousPage = useCallback(() => {
    router.back()
  }, [router])

  return (
    <AppLayout>
      <AboutBackBox>
        <AboutBackIcon
          src={`/images/shared/back-icon.svg`}
          alt="back-icon"
          onClick={backToPreviousPage}
        />
        <MobileAboutLioLogoImage
          src="/images/about/lio-desc-2.png"
          alt="lio-studio-logo"
          width="78"
          height="78"
        />
      </AboutBackBox>
      <AboutLioContainer>
        <AboutLioInfo />
        <AboutLioInfoTeplet />
        <AboutLioMainPoster />
      </AboutLioContainer>
    </AppLayout>
  )
}
