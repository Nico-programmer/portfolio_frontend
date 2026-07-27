import type { Education } from "../../../types/portfolio";

import EducationItem from "./EducationItem";

interface EducationTimelineProps {
  education: Education[];
}

const EducationTimeline = ({
  education,
}: EducationTimelineProps) => {
  if (education.length === 0) {
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
    <div className="mx-auto max-w-5xl">
      {education.map((item, index) => (
        <EducationItem
          key={item.id}
          education={item}
          isLast={index === education.length - 1}
        />
      ))}
    </div>
  );
};

export default EducationTimeline;