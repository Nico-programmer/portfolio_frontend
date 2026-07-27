interface ExperienceHeaderProps {
  total: number;
}

const ExperienceHeader = ({
  total,
}: ExperienceHeaderProps) => {
  return (
    <div className="mb-20 text-center">

      <span
        className="
          inline-block
          rounded-full
          border
          border-indigo-500/20
          bg-indigo-500/10
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-indigo-300
        "
      >
        Experiencia
      </span>

      <h2
        className="
          mt-6
          text-5xl
          font-black
          tracking-tight
          text-white
        "
      >
        Mi trayectoria profesional
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-lg
          leading-8
          text-slate-400
        "
      >
        Durante mi carrera he participado en diferentes proyectos,
        desarrollando soluciones web modernas utilizando tecnologías
        enfocadas en rendimiento, escalabilidad y buenas prácticas.
      </p>

      <div
        className="
          mt-10
          flex
          justify-center
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            px-8
            py-5
          "
        >
          <p className="text-4xl font-black text-indigo-400">
            {total}
          </p>

          <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
            Experiencias
          </p>
        </div>
      </div>

    </div>
  );
};

export default ExperienceHeader;