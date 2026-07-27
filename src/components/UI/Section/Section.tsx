import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

const Section = ({children, id, className = "",}: SectionProps) => {
  return (
    <section id={id} className={`py-24 ${className}`}>
      {children}
    </section>
  )
}

export default Section