export enum TripletWho {
  first = "first",
  second = "second",
  third = "third",
}

export class TripletDto {
  caption: string
  mobileCaption: string
  clicked: number
  createdAt: string
  id: string
  thumbnail: string
  updatedAt: string
  who: TripletWho
}
