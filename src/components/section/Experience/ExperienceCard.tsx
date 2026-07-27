import type { Experience } from "../../../types/portfolio";

import { getMediaUrl } from "../../../utils/media";
import { formatMonthYear, getDuration } from "../../../utils/date";

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-500/40
        hover:shadow-xl
        hover:shadow-indigo-500/10
      "
    >
      <div
        className="
          absolute
          -right-16
          -top-16
          h-48
          w-48
          rounded-full
          bg-indigo-500/5
          blur-3xl
        "
      />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex gap-5">

            {experience.company_logo && (
              <img
                src={getMediaUrl(experience.company_logo)}
                alt={experience.company}
                className="
                  h-16
                  w-16
                  rounded-xl
                  object-cover
                  border
                  border-slate-700
                "
              />
            )}

            <div>

              <h3 className="text-2xl font-bold text-white">
                {experience.position}
              </h3>

              <p className="mt-1 text-lg text-indigo-400">
                {experience.company}
              </p>

              {experience.location && (
                <p className="mt-2 text-sm text-slate-400">
                  📍 {experience.location}
                </p>
              )}

            </div>

          </div>

          {experience.current_job && (
            <span
              className="
                rounded-full
                bg-green-500/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                text-green-400
              "
            >
              Actual
            </span>
          )}

        </div>

        {/* Descripción */}

        <p
          className="
            mt-8
            leading-8
            text-slate-300
          "
        >
          {experience.description}
        </p>

        {/* Tecnologías */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-2
          "
        >
          {experience.technologies.map((technology) => (
            <span
              key={technology.id}
              className="
                rounded-full
                bg-indigo-500/10
                px-3
                py-1
                text-sm
                text-indigo-300
              "
            >
              {technology.name}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-slate-800
            pt-6
            text-sm
            text-slate-400
          "
        >
          <span>
            {formatMonthYear(experience.start_date)}
            {" • "}
            {experience.current_job
              ? "Actualidad"
              : experience.end_date
              ? formatMonthYear(experience.end_date)
              : "-"}
          </span>

          <span>
            {getDuration(
              experience.start_date,
              experience.end_date
            )}
          </span>
        </div>

      </div>
    </article>
  );
};

export default ExperienceCard;