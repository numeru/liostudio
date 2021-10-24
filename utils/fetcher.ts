import axios from "axios"

export default async function fetcher<T>(url: string) {
  const response = await axios.get<T | any>(url)
  return response.data.data
}
