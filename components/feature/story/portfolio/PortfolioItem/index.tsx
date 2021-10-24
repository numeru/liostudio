import { PortfolioInfo } from "@pages/story/portfolio"
import { useCallback } from "react"
import {
  PortfolioCard,
  PortfolioDescription,
  PortfolioThumbnail,
} from "@components/feature/story/portfolio/PortfolioItem/styled"
import useWindowSize from "@hooks/useWindowWidth"

type Props = {
  portfolio: PortfolioInfo
}

const PortfolioItem = ({ portfolio }: Props) => {
  const { width: windowWidth } = useWindowSize()

  const handleClickPortfolio = useCallback(() => {
    window.open(`/story/portfolio/${portfolio.notionId}`, "_blank", "noopener")
  }, [portfolio.notionId])

  return (
    <PortfolioCard onClick={handleClickPortfolio}>
      <PortfolioDescription>
        <p>{portfolio.title}</p>
        <div></div>
        <p>
          {windowWidth > 1024
            ? portfolio.description
            : `${portfolio.description.slice(0, 97)}...`}
        </p>
      </PortfolioDescription>
      <PortfolioThumbnail src={portfolio.thumbnail} alt="portfolio_image" />
    </PortfolioCard>
  )
}

export default PortfolioItem
