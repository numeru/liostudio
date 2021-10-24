export class ResponseDto<T> {
  success: boolean
  data: T
}

export const responseError = new Error("Server Something Wrong...")
