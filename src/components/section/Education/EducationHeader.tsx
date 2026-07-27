interface EducationHeaderProps {
  total: number;
}

const EducationHeader = ({ total }: EducationHeaderProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span
        className="
          rounded-full
          border
          border-indigo-500/30
          bg-indigo-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-indigo-300
        "
      >
        Formación Académica
      </span>

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          text-white
          md:text-5xl
        "
      >
        Educación
      </h2>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-400
        "
      >
        Mi formación profesional, certificaciones y aprendizaje continuo en
        tecnologías relacionadas con el desarrollo de software.
      </p>

      <p className="mt-5 text-sm text-slate-500">
        {total} {total === 1 ? "registro" : "registros"}
      </p>

    </div>
  );
};

export default EducationHeader;