import { useEffect, useState } from "react"
import api from "@apis/urls"
import BottomNav from "@components/feature/home/BottomNav"
import Triplet from "@components/feature/home/Triplet"
import AppLayout from "@components/layouts/AppLayout"
import { TripletDto } from "@apis/dtos/triplet.dto"
import SubPoster from "@components/feature/home/SubPoster"
import {
  HomeArtworkSection,
  HomeContainer,
  HomeVideoViewerSection,
  HomeVideoViewerSectionMobile,
  HomeWhiteLine,
} from "@components/feature/home/styled"
import SpinLoader from "@components/shared/SpinLoader"
import SubPosterMobile from "@components/feature/home/SubPosterMobile"
import useSWR from "swr"
import fetcher from "@utils/fetcher"
import { swrOption } from "@utils/swr-options"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { data: tripletResData, error } = useSWR<TripletDto[]>(
    api.core.triplet,
    fetcher,
    swrOption,
  )

  useEffect(() => {
    if (tripletResData) {
      if (error) setIsError(true)
      setIsLoading(false)
    }
  }, [tripletResData, error])

  return (
    <AppLayout>
      <HomeContainer>
        {/* <HomeModelViewerSection>
          <ModelViewer />
        </HomeModelViewerSection> */}

        <HomeVideoViewerSection muted autoPlay loop playsInline>
          <source src="/videos/main.mp4" type="video/mp4" />
        </HomeVideoViewerSection>

        <HomeVideoViewerSectionMobile muted autoPlay loop playsInline>
          <source src="/videos/main_m.mp4" type="video/mp4" />
        </HomeVideoViewerSectionMobile>

        <HomeWhiteLine />

        <HomeArtworkSection>
          <SubPoster />
          <SubPosterMobile />
        </HomeArtworkSection>

        <HomeWhiteLine />

        <HomeArtworkSection>
          {isLoading ? (
            <SpinLoader />
          ) : isError ? (
            <span>데이터를 가져오는 과정에서 문제가 발생했습니다.</span>
          ) : (
            <Triplet triplet={tripletResData} />
          )}
        </HomeArtworkSection>
        <HomeWhiteLine />
        <BottomNav />
      </HomeContainer>
    </AppLayout>
  )
}
