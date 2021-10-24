import React from "react"
import { AppFooter, AppInfo, AppInfoLeft } from "./styled"
type Props = {
  checkPath: boolean
}

const Footer = ({ checkPath }: Props) => {
  return (
    <AppFooter checkPath={checkPath}>
      <AppInfoLeft>
        <AppInfo>
          LIO STUDIO, Seoul, Republic of Korea E-MAIL.
          liodesign.official@gmail.com
        </AppInfo>
        <AppInfo>Yoon Sang Seok, Yoon Ye Rim</AppInfo>
      </AppInfoLeft>

      <AppInfo>Copyright © 2021 LIO STUDIO. All Rights Reserved.</AppInfo>
    </AppFooter>
  )
}

export default Footer
