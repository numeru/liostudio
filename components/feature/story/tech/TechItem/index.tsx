import { useCallback } from "react"
import { TechCard, TechDescription, TechThumbnail } from "./styled"
import { TechDto } from "@apis/dtos/techs.dto"

type Props = {
  techInfo: TechDto
}

export default function TechItem({ techInfo }: Props) {
  const handleClickTechItem = useCallback(() => {
    // "_blank", "_self"
    window.open(`/story/tech/${techInfo.notionId}`, "_blank", "noopener")
  }, [techInfo.notionId])

  return (
    <TechCard onClick={handleClickTechItem}>
      <TechDescription>
        <p>{techInfo.title}</p>
        <p>{techInfo.description}</p>
        <p>
          {techInfo.createdAt.slice(0, 10).replace(/\-/g, ".")}{" "}
          <span>| {techInfo.clicked} views</span>
        </p>
      </TechDescription>

      <TechThumbnail
        src={techInfo.thumbnail}
        alt="lio-tech-article"
        width="753.86"
        height="580.72"
      />
    </TechCard>
  )
}
