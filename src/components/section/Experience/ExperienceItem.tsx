import type { Experience } from "../../../types/portfolio";

import ExperienceCard from "./ExperienceCard";
import ExperienceDate from "./ExperienceDate";

interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

const ExperienceItem = ({
  experience,
  isLast,
}: ExperienceItemProps) => {
  return (
    <div
      className="
        relative
        flex
        gap-8
        pb-14
      "
    >
      {/* Timeline */}
      <div
        className="
          relative
          flex
          w-10
          shrink-0
          flex-col
          items-center
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            top-0
            h-6
            w-6
            rounded-full
            bg-indigo-500/20
            blur-lg
          "
        />

        {/* Punto */}
        <div
          className="
            relative
            z-10
            h-5
            w-5
            rounded-full
            border-4
            border-slate-950
            bg-indigo-500
            shadow-lg
            shadow-indigo-500/40
          "
        />

        {/* Línea */}
        {!isLast && (
          <div
            className="
              mt-2
              w-[2px]
              flex-1
              bg-gradient-to-b
              from-indigo-500
              via-indigo-400/40
              to-transparent
            "
          />
        )}
      </div>

      {/* Contenido */}
      <div className="flex-1">
        <ExperienceDate
          startDate={experience.start_date}
          endDate={experience.end_date}
          currentJob={experience.current_job}
        />

        <ExperienceCard
          experience={experience}
        />
      </div>
    </div>
  );
};

export default ExperienceItem;