import type { Technology } from "../../../types/portfolio"

import TechnologyLevel from "./TechnologyLevel"

interface TechnologyCardProps {
  technology: Technology
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  const iconUrl = technology.icon ? `${BACKEND_URL}${technology.icon}`: null;

  console.log(technology.icon);
  console.log(iconUrl);

  return (
    <article className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-slate-800/60 transition-transform duration-300 group-hover:scale-110">
          {iconUrl ? (
            <img
              src={iconUrl}
              alt={technology.name}
              className="h-20 w-20 object-contain"
            />
          ) : (
            <span className="text-3xl">⚙️</span>
          )}
        </div>

        <h4 className="mb-5 text-lg font-semibold text-slate-100">
          {technology.name}
        </h4>

        <TechnologyLevel level={technology.level} />
      </div>
    </article>
  )
}

export default TechnologyCard