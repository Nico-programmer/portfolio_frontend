import api from "./axios"
import type { PortfolioResponse } from "../types/portfolio"

export const getPortfolio = async (): Promise<PortfolioResponse> => {
  const response = await api.get<PortfolioResponse>("/portfolio/")
  
  return response.data
}