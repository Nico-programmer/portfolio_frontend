import type { Biography } from "../../../types/portfolio"

interface AboutContentProps {
  biography: Biography
}

const AboutContent = ({ biography }: AboutContentProps) => {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          ¿Quién soy?
        </span>

        <h3 className="mt-2 text-3xl font-bold text-slate-100">
          Apasionado por crear soluciones modernas y escalables
        </h3>
      </div>

      <p className="text-lg leading-8 text-slate-400">
        {biography.about}
      </p>

      {biography.available_for_work && (
        <div className="inline-flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-green-400" />

          <div>
            <p className="font-medium text-green-300">
              Disponible para trabajar
            </p>

            <p className="text-sm text-slate-400">
              Actualmente abierto a nuevos proyectos y oportunidades.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutContent