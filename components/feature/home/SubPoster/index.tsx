import {
  Wrapper,
  Description,
  DescriptionWrapper,
  Poster,
  PosterDescription,
  Title,
  BlankBox,
} from "./styled"

const SubPoster = () => {
  return (
    <Wrapper>
      <Title>Theme of May: 어린이날 [Children’s Day]</Title>
      <Poster src={"/images/home/poster.gif"} />
      <DescriptionWrapper>
        <Description>
          L I O는 월별로 테마를 정하고 거기에 리오의 관점을 더한 다양한 디자인
          콘텐츠를 제공합니다. 트렌드에 맞춘 테마가 정해지면 리오는 해당
          트렌드를 재해석한 아트워크를 제작하면서 더욱 풍부한 스토리를
          내보입니다
        </Description>
        <BlankBox />
        <PosterDescription>
          Theme of May: 어린이날 [Children’s Day] 어린이를 위한 날은
          어린아이들뿐만 아니라 다 커버린 어른들에게도 동심을 떠올리게 하는
          날입니다. 리오는 앞만 보고 달려온 ‘어른이’들에게 마음 한 켠에 박혀있는
          그 시절의 자아를 상기시키고 싶습니다. 화면 중앙의 곰돌이를 눌러 동심을
          찾아보세요!
        </PosterDescription>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export default SubPoster
