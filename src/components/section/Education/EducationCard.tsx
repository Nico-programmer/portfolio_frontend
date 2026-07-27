import type { Education } from "../../../types/portfolio";

import { getMediaUrl } from "../../../utils/media";
import { formatMonthYear, getDuration } from "../../../utils/date";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({
  education,
}: EducationCardProps) => {
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
      {/* Glow */}

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

            {education.institution_logo && (
              <img
                src={getMediaUrl(education.institution_logo)}
                alt={education.institution}
                className="
                  h-16
                  w-16
                  rounded-xl
                  border
                  border-slate-700
                  object-cover
                "
              />
            )}

            <div>

              <h3 className="text-2xl font-bold text-white">
                {education.degree}
              </h3>

              <p className="mt-1 text-lg text-indigo-400">
                {education.institution}
              </p>

            </div>

          </div>

          <span
            className={`
              rounded-full
              px-4
              py-2
              text-xs
              font-semibold
              uppercase

              ${
                education.currently_studying
                  ? "bg-green-500/10 text-green-400"
                  : "bg-slate-800 text-slate-300"
              }
            `}
          >
            {education.currently_studying
              ? "En curso"
              : "Finalizado"}
          </span>

        </div>

        {/* Descripción */}

        {education.description && (
          <p
            className="
              mt-8
              leading-8
              text-slate-300
            "
          >
            {education.description}
          </p>
        )}

        {/* Footer */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
            border-t
            border-slate-800
            pt-6
          "
        >

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            {formatMonthYear(education.start_date)}
            {" • "}
            {education.currently_studying
              ? "Actualidad"
              : education.end_date
              ? formatMonthYear(education.end_date)
              : "-"}
          </div>

          <div
            className="
              text-sm
              font-medium
              text-indigo-300
            "
          >
            {getDuration(
              education.start_date,
              education.end_date
            )}
          </div>

        </div>

        {/* Certificado */}

        {education.certificate_url && (
          <a
            href={education.certificate_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              rounded-xl
              bg-indigo-500
              px-5
              py-3
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-indigo-400
            "
          >
            📜 Ver certificado
          </a>
        )}

      </div>
    </article>
  );
};

export default EducationCard;