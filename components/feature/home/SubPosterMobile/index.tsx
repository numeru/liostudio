import {
  Wrapper,
  Description,
  DescriptionWrapper,
  Poster,
  Title,
  SubTitle,
} from "./styled"

const SubPosterMobile = () => {
  return (
    <Wrapper>
      <SubTitle>Theme of May</SubTitle>
      <Title>어린이날 [Children’s Day]</Title>
      <Poster src={"/images/home/poster_m.gif"} />
      <DescriptionWrapper>
        <Description>
          앞만 보고 달려온 ‘어른이’들을 위한 어린이날
          <br />
          화면 중앙에 있는 곰돌이를 눌러 동심을 찾아보세요
        </Description>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export default SubPosterMobile
