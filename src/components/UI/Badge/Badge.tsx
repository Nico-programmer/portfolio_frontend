import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200">
      {children}
    </span>
  )
}

export default Badge