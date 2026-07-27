interface ExperienceDateProps {
  startDate: string;
  endDate: string | null;
  currentJob: boolean;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("es-CO", {
    month: "short",
    year: "numeric",
  });
};

const ExperienceDate = ({
  startDate,
  endDate,
  currentJob,
}: ExperienceDateProps) => {
  return (
    <div
      className="
        mb-5
        inline-flex
        rounded-full
        border
        border-indigo-500/20
        bg-indigo-500/10
        px-4
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[0.2em]
        text-indigo-300
      "
    >
      {formatDate(startDate)}
      {" • "}
      {currentJob
        ? "Actualidad"
        : endDate
          ? formatDate(endDate)
          : "Sin fecha"}
    </div>
  );
};

export default ExperienceDate;