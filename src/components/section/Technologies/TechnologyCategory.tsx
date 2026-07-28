import type { Technology } from "../../../types/portfolio";

import TechnologyCard from "./TechnologyCard";

import StaggerContainer from "../../UI/Animation/StaggerContainer";
import StaggerItem from "../../UI/Animation/StaggerItem";

interface TechnologyCategoryProps {
  title: string;
  technologies: Technology[];
}

const TechnologyCategory = ({
  title,
  technologies,
}: TechnologyCategoryProps) => {
  return (
    <section className="space-y-8">

      {/* Título */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-800" />

        <h3 className="whitespace-nowrap text-xl font-bold text-slate-100">
          {title}
        </h3>

        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <StaggerContainer
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
        "
      >
        {technologies.map((technology) => (
          <StaggerItem key={technology.id}>
            <TechnologyCard technology={technology} />
          </StaggerItem>
        ))}
      </StaggerContainer>

    </section>
  );
};

export default TechnologyCategory;