import type { Technology } from "../../../types/portfolio"

import TechnologyCard from "./TechnologyCard"

import StaggerContainer from "../../UI/Animation/StaggerContainer";
import StaggerItem from "../../UI/Animation/StaggerContainer";

interface TechnologyCategoryProps {
  title: string;
  technologies: Technology[]
}

const TechnologyCategory = ({
  title,
  technologies,
}: TechnologyCategoryProps) => {
  return (
    <section className="space-y-8">
      {/* Encabezado */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-800" />

        <h3 className="text-xl font-bold text-slate-100 whitespace-nowrap">
          {title}
        </h3>

        <div className="h-px flex-1 bg-slate-800" />
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <StaggerContainer>
          {technologies.map((technology) => (
            <StaggerItem key={technology.id}>
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default TechnologyCategory