import { TechDto } from "./techs.dto"

export class PaginationDto {
  readonly totalPages: number | null
  readonly currentPage: number | null
  readonly prevPage: number | null
  readonly nextPage: number | null
  readonly limitation: number | null
}

export class TechPaginationDto extends PaginationDto {
  readonly techs: TechDto[]
}
