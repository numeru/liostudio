import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useCallback } from "react"
import {
  AppHeader,
  AppLogoImage,
  AppNav,
  AppMenuList,
  AppMenuItem,
  AppToggleMenuButton,
  AppDetailNav,
  AppDetailSection,
  AppDetailMenuList,
  AppDetailMenuItem,
  AppDetailNavMo,
  AppDetailMenuListMo,
  AppDetailMenuFollowMo,
  AppFollowImagesMo,
  AppFollowImage,
} from "@components/layouts/AppLayout/Header/styled"

export default function Header() {
  const router = useRouter()

  const [showDetailMenus, setShowDetailMenus] = useState(false)
  const [showMoDetailMenus, setShowMoDetailMenus] = useState(false)

  const handleClickLogo = useCallback(() => {
    router.push("/")
  }, [router])

  const handleClickToggleButton = useCallback(() => {
    setShowDetailMenus((prev) => !prev)
    setShowMoDetailMenus((prev) => !prev)
  }, [])

  const handleMouseEventOnNav = useCallback((show: boolean) => {
    setShowDetailMenus(show)
  }, [])

  const webDetailMenus = useCallback(() => {
    return (
      <AppDetailNav
        onMouseEnter={() => handleMouseEventOnNav(true)}
        onMouseLeave={() => handleMouseEventOnNav(false)}
      >
        <AppDetailSection>
          <AppDetailMenuList>
            <li>
              <Link href="/about" passHref>
                <AppDetailMenuItem>LIO</AppDetailMenuItem>
              </Link>
            </li>
            <li>
              <Link href="/about/studio" passHref>
                <AppDetailMenuItem>Studio</AppDetailMenuItem>
              </Link>
            </li>
          </AppDetailMenuList>
          <AppDetailMenuList>
            <li>
              <Link href="/story" passHref>
                <AppDetailMenuItem>Art</AppDetailMenuItem>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/story/tech",
                  query: { page: 1 },
                }}
                passHref
              >
                <AppDetailMenuItem>Tech</AppDetailMenuItem>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/story/portfolio",
                  query: { page: 1 },
                }}
                passHref
              >
                <AppDetailMenuItem>Portfolio</AppDetailMenuItem>
              </Link>
            </li>
          </AppDetailMenuList>
        </AppDetailSection>
      </AppDetailNav>
    )
  }, [handleMouseEventOnNav])

  const mobileDetailMenu = useCallback(() => {
    return (
      <AppDetailNavMo>
        <AppDetailMenuListMo>
          <li>
            <Link href="/about" passHref>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a>Lio</a>
            </Link>
          </li>
          <li>
            <Link href="/about/studio" passHref>
              <a>Studio</a>
            </Link>
          </li>
        </AppDetailMenuListMo>
        <AppDetailMenuListMo>
          <li>
            <Link href="/story" passHref>
              <a>Story</a>
            </Link>
          </li>
          <li>
            <Link href="/story" passHref>
              <a>Art</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/story/tech",
                query: { page: 1 },
              }}
            >
              <a>Tech</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/story/portfolio",
                query: { page: 1 },
              }}
            >
              <a>Portfolio</a>
            </Link>
          </li>
        </AppDetailMenuListMo>
        <AppDetailMenuListMo>
          <li>
            <Link
              href={{
                pathname: "/news",
                query: { page: 1 },
              }}
              passHref
            >
              <a>News</a>
            </Link>
          </li>
        </AppDetailMenuListMo>
        <AppDetailMenuListMo>
          <li>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </li>
        </AppDetailMenuListMo>
        <AppDetailMenuFollowMo>Follow us</AppDetailMenuFollowMo>
        <AppFollowImagesMo>
          <AppFollowImage
            src="/images/header/facebook.svg"
            alt="facebook"
            width="17"
            height="17"
          />
          <AppFollowImage
            src="/images/header/instagram.svg"
            alt="insta"
            width="17"
            height="17"
          />
          <AppFollowImage
            src="/images/header/youtube.svg"
            alt="youtube"
            width="17"
            height="17"
          />
        </AppFollowImagesMo>
      </AppDetailNavMo>
    )
  }, [])

  return (
    <AppHeader>
      <AppLogoImage
        src="/images/header/lio-logo.svg"
        alt="logo"
        width="142.88"
        height="19.12"
        onClick={handleClickLogo}
      />
      <AppNav
        onMouseEnter={() => handleMouseEventOnNav(true)}
        onMouseLeave={() => handleMouseEventOnNav(false)}
      >
        <AppMenuList>
          <li>
            <Link href="/about" passHref>
              <AppMenuItem>About</AppMenuItem>
            </Link>
          </li>
          <li>
            <Link href="/story" passHref>
              <AppMenuItem>Story</AppMenuItem>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/news",
                query: { page: 1 },
              }}
              passHref
            >
              <AppMenuItem>News</AppMenuItem>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <AppMenuItem>Contact</AppMenuItem>
            </Link>
          </li>
        </AppMenuList>
        <AppToggleMenuButton onClick={handleClickToggleButton}>
          <img
            src="/images/header/ham-button.png"
            alt="rger"
            width="20"
            height="20"
          />
        </AppToggleMenuButton>
      </AppNav>
      {showDetailMenus && webDetailMenus()}
      {showMoDetailMenus && mobileDetailMenu()}
    </AppHeader>
  )
}
