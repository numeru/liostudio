import Fetcher, { FetchConfig } from "swr-fetcher"
import api from "../urls"
import { PortfolioDto } from "../dtos/portfolios.dto"
import { ArtProjectDto } from "../dtos/arts.dto"
import { NewsDto } from "../dtos/news.dto"
import { TripletDto } from "../dtos/triplet.dto"
import { ResponseDto, responseError } from "../dtos/response.dto"
import { TechDto } from "@apis/dtos/techs.dto"

export default class ServiceRepository extends Fetcher {
  constructor() {
    const fetchConfig: FetchConfig = {
      baseURL: api.index,
      withCredentials: true,
    }
    super(fetchConfig)
  }

  public async getArtProjectDetail(id: string) {
    const result = await this.get<ResponseDto<ArtProjectDto>>(
      `${api.arts.projects.contents}/${id}`,
    )
    if (result.success) return result.data
    else throw responseError
  }

  public async getPortfolioDetail(id: string) {
    const result = await this.get<ResponseDto<PortfolioDto>>(
      `${api.portfolios.contents}/${id}`,
    )
    if (result.success) return result.data
    else throw responseError
  }

  public async getNewsDetail(id: string) {
    const result = await this.get<ResponseDto<NewsDto>>(
      `${api.news.index}/${id}`,
    )
    if (result.success) return result.data
    else throw responseError
  }

  public async getTriplet() {
    const result = await this.get<ResponseDto<TripletDto[]>>(
      `${api.core.triplet}`,
    )
    if (result.success) return result.data
    else throw responseError
  }

  public async getTechDetail(id: string) {
    const result = await this.get<ResponseDto<TechDto>>(
      `${api.techs.contents}/${id}`,
    )
    if (result.success) return result.data
    else throw responseError
  }

  public async postContact(email: string, content: string) {
    const result = await this.post(`${api.core.contacts}`, {
      email,
      message: content,
    })
    if (result.success) return result.data
    else throw responseError
  }
}
