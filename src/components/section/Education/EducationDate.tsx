import { formatMonthYear } from "../../../utils/date";

interface EducationDateProps {
  startDate: string;
  endDate: string | null;
  currentlyStudying: boolean;
}

const EducationDate = ({
  startDate,
  endDate,
  currentlyStudying,
}: EducationDateProps) => {
  return (
    <div className="mb-5">

      <span
        className="
          text-sm
          font-medium
          uppercase
          tracking-wider
          text-indigo-400
        "
      >
        {formatMonthYear(startDate)}
        {" • "}
        {currentlyStudying
          ? "Actualidad"
          : endDate
          ? formatMonthYear(endDate)
          : "-"}
      </span>

    </div>
  );
};

export default EducationDate;