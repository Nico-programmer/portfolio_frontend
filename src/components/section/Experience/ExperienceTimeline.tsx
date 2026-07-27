import type { Experience } from "../../../types/portfolio";

import ExperienceItem from "./ExperienceItem";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({
  experiences,
}: ExperienceTimelineProps) => {
  if (experiences.length === 0) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-dashed
          border-slate-700
          py-20
          text-center
        "
      >
        <h3 className="text-2xl font-semibold text-slate-300">
          Próximamente...
        </h3>

        <p className="mt-3 text-slate-500">
          Estoy preparando esta sección.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        mx-auto
        max-w-5xl
      "
    >
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;