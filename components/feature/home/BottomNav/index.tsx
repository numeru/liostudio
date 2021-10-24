import Link from "next/link"
import React, { useCallback } from "react"
import {
  Anchor,
  FollowIconCaption,
  HomeBottomNav,
  HomeBottomNavMenus,
  HomeBottomNavSection,
  HomeFollowOption,
  HomeFollowOptionImage,
  HomeFollowOptions,
  HomeFollowSection,
  HomeFollowTitle,
} from "@components/feature/home/BottomNav/styled"

const BottomNav = () => {
  const handleClick = useCallback((target) => {
    if (target === "instagram")
      window.open("https://www.instagram.com/lio__studio", "_blank")
    else if (target === "facebook")
      window.open("https://www.instagram.com/lio__studio", "_blank")
    else if (target === "youtube")
      window.open("https://youtu.be/-kS96L87pV8", "_blank")
  }, [])

  return (
    <HomeBottomNavSection>
      <HomeBottomNav>
        <HomeBottomNavMenus>
          <li>
            <Link href="/about" passHref>
              <Anchor>About</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <Anchor style={{ opacity: 0.6 }}>Lio</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/about/studio" passHref>
              <Anchor style={{ opacity: 0.6 }}>Studio</Anchor>
            </Link>
          </li>
        </HomeBottomNavMenus>
        <HomeBottomNavMenus>
          <li>
            <Link href="/story" passHref>
              <Anchor>Story</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/story" passHref>
              <Anchor style={{ opacity: 0.6 }}>Art</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/story/tech" passHref>
              <Anchor style={{ opacity: 0.6 }}>Tech</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/story/portfolio" passHref>
              <Anchor style={{ opacity: 0.6 }}>Portfolio</Anchor>
            </Link>
          </li>
        </HomeBottomNavMenus>
        <HomeBottomNavMenus>
          <li>
            <Link href="/news" passHref>
              <Anchor>News</Anchor>
            </Link>
          </li>
        </HomeBottomNavMenus>
        <HomeBottomNavMenus>
          <li>
            <Link href="/contact" passHref>
              <Anchor>Contact</Anchor>
            </Link>
          </li>
        </HomeBottomNavMenus>
      </HomeBottomNav>

      <HomeFollowSection>
        <HomeFollowTitle>Follow us</HomeFollowTitle>
        <HomeFollowOptions>
          <HomeFollowOption>
            <HomeFollowOptionImage
              src="/images/header/instagram.svg"
              alt="instagram"
              width="17"
              height="17"
              onClick={() => handleClick("instagram")}
            />
            <FollowIconCaption onClick={() => handleClick("instagram")}>
              Instagram
            </FollowIconCaption>
          </HomeFollowOption>
          <HomeFollowOption>
            <HomeFollowOptionImage
              src="/images/header/facebook.svg"
              alt="facebook"
              width="17"
              height="17"
              onClick={() => handleClick("facebook")}
            />
            <FollowIconCaption onClick={() => handleClick("facebook")}>
              Facebook
            </FollowIconCaption>
          </HomeFollowOption>
          <HomeFollowOption>
            <HomeFollowOptionImage
              src="/images/header/youtube.svg"
              alt="youtube"
              width="17"
              height="17"
              onClick={() => handleClick("youtube")}
            />
            <FollowIconCaption onClick={() => handleClick("youtube")}>
              Youtube
            </FollowIconCaption>
          </HomeFollowOption>
        </HomeFollowOptions>
      </HomeFollowSection>
    </HomeBottomNavSection>
  )
}

export default BottomNav
