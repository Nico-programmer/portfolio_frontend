import { useEffect, useState } from "react"
import { getPortfolio } from "../api/portfolio"
import type { PortfolioResponse } from "../types/portfolio"

export const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState<PortfolioResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolio()
        
        setPortfolio(data)
      } catch (err) {
        setError("No fue posible cargar la información del portafolio.")
      } finally {
        setLoading(false)
      }
    }

    fetchPortfolio()
  }, [])

  return {portfolio, loading, error}
}