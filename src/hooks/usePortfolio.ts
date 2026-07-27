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
        console.log("1. Iniciando petición");

        const data = await getPortfolio()
        
        console.log("2. Datos recibidos");

        console.log(data);

        setPortfolio(data)

        console.log("3. Portfolio actualizado");
      } catch (err) {
        console.log("4. Error");

        setError("No fue posible cargar la información del portafolio.")
        console.error(err)
      } finally {
        console.log("5. Cambiando loading a false");
        setLoading(false)
      }
    }

    fetchPortfolio()
  }, [])

  return {portfolio, loading, error}
}