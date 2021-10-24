import { useRouter } from "next/router"
import { useCallback } from "react"
import { TripletDto } from "@apis/dtos/triplet.dto"
import styled from "styled-components"

type Props = {
  triplet: TripletDto[]
}

type StyledProps = {
  imageSrc: string
}

export const MobileTitle = styled.div`
  color: white;
  display: none;
  margin: 40px 0;
  font-size: 20px;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    font-size: 14px;
  }
  @media (max-width: 414px) {
    font-size: 10px;
  }
`

export const TripletSection = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0;
`

export const TripletItem = styled.li`
  width: 33%;
  height: 100%;

  &:nth-child(2) {
    margin: 0 0.5%;
  }

  &:hover {
    transition: all 200ms ease-in;
    opacity: 0.8;
    cursor: pointer;
  }
`

export const TripletImage = styled.figure`
  height: 0;
  margin: 0;
  padding-bottom: 170%;
  background-image: url(${({ imageSrc }: StyledProps) => imageSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 2%;
`

export const TripletCaption = styled.p`
  color: white;
  height: 10%;
  margin: 0;
  font-size: 13px;
  padding: 4% 8% 4% 0;
  line-height: 1.3;

  @media screen and (max-width: 1920px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1428px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const BlankBox = styled.div`
  display: none;
  @media (max-width: 768px) {
    height: 25px;
    display: block;
  }
`

export const LastMobileLine = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    border-top: 1px solid white;
  }
`

export const TripletCaptionBoxMobile = styled.div`
  padding: 0 4%;
`

export const TripletCaptionMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 13px;
    color: white;
    height: 10%;
    margin: 0;
    border-top: 1px solid white;
    line-height: 150%;
    opacity: 0.9;
    padding: 6px 0;
    &:last-child {
      border-bottom: 1px solid white;
    }
  }
  @media (max-width: 414px) {
    /* SVG */
    font-size: 10px;
  }
`

export default function Triplet({ triplet }: Props) {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push("/story")
  }, [router])

  return (
    <>
      <MobileTitle>What gazes LIO</MobileTitle>
      <TripletSection>
        {triplet?.map((baby) => (
          <TripletItem key={baby.id} onClick={handleClick}>
            <TripletImage imageSrc={baby.thumbnail} />
            <TripletCaption>
              <span>{baby.caption}</span>
            </TripletCaption>
          </TripletItem>
        ))}
      </TripletSection>
      <BlankBox />
      <TripletCaptionBoxMobile>
        {triplet?.map((baby) => (
          <TripletCaptionMobile key={baby.id}>
            <span>{baby.mobileCaption}</span>
          </TripletCaptionMobile>
        ))}
        <LastMobileLine />
      </TripletCaptionBoxMobile>
      <BlankBox />
    </>
  )
}
