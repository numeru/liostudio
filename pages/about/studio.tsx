import AppLayout from "@components/layouts/AppLayout"
import { MemberInfo, allMembers } from "@utils/member-list"
import { useState, useEffect, useCallback } from "react"
import {
  StudioContainer,
  StudioHeader,
  StudioSlideWrapper,
  StudioThumbImageWrapper,
  StudioImageList,
  StudioSlideButton,
  StudioThumbSlide,
  StudioThumbImage,
  StudioSlideButtonImage,
  StudioMemberImage,
  StudioMemberInfo,
} from "@components/feature/about/studio/styled"
import BackIcon from "@components/shared/BackIcon"

enum Direction {
  UP,
  DOWN,
}

const AboutStudio = () => {
  const [start, setStart] = useState<number>(0)
  const [members, setMembers] = useState<MemberInfo[]>(
    allMembers.slice(start, 3),
  )

  useEffect(() => {
    const memberSize: number = allMembers.length
    let startIdx: number
    if (start < 0) startIdx = Math.abs(start % memberSize)
    else startIdx = start % memberSize
    setMembers([
      allMembers[startIdx],
      allMembers[(startIdx + 1) % memberSize],
      allMembers[(startIdx + 2) % memberSize],
    ])
  }, [start])

  const handleClickSlideButton = useCallback((direction: Direction) => {
    if (direction === Direction.UP) setStart((preState) => ++preState)
    else if (direction === Direction.DOWN) setStart((preState) => --preState)
  }, [])

  const handleClickThumbImage = (idx: number) => {
    setStart((preState) => preState - idx)
  }

  return (
    <AppLayout>
      <StudioContainer>
        <BackIcon />
        <StudioHeader>
          <p>{members[0].position}</p>
          <p>{members[0].name}</p>
        </StudioHeader>
        <StudioSlideWrapper>
          <StudioThumbSlide>
            <StudioSlideButton
              onClick={() => handleClickSlideButton(Direction.UP)}
            >
              <StudioSlideButtonImage
                src="/images/about/arrow-up.svg"
                alt="arrow"
                width="25.9"
                height="14.47"
              />
            </StudioSlideButton>
            <StudioImageList>
              {members.map((member, idx) => (
                <StudioThumbImageWrapper
                  key={member.id}
                  onClick={() => handleClickThumbImage(idx)}
                >
                  <StudioThumbImage src={member.thumbnail} />
                </StudioThumbImageWrapper>
              ))}
            </StudioImageList>
            <StudioSlideButton
              onClick={() => handleClickSlideButton(Direction.DOWN)}
            >
              <StudioSlideButtonImage
                src="/images/about/arrow-down.svg"
                alt="arrow"
                width="25.9"
                height="14.47"
              />
            </StudioSlideButton>
          </StudioThumbSlide>
          <StudioMemberImage src={members[0].image} />
        </StudioSlideWrapper>

        <StudioMemberInfo>
          <p>{members[0].name}</p>
          <p>{members[0].position}</p>
          <p>{members[0].description_kor}</p>
          <p>{members[0].description_eng}</p>
        </StudioMemberInfo>
      </StudioContainer>
    </AppLayout>
  )
}

export default AboutStudio
