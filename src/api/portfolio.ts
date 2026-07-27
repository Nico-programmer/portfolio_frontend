import api from "./axios"
import type { PortfolioResponse } from "../types/portfolio"

console.log(import.meta.env.VITE_API_URL)

export const getPortfolio = async (): Promise<PortfolioResponse> => {
  console.log("Antes de la petición");

  const response = await api.get<PortfolioResponse>("/portfolio/")
  
  console.log("Después de la petición");

  return response.data
}