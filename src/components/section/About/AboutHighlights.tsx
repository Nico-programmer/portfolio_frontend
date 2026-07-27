const highlights = [
  {
    icon: "⚙️",
    title: "Backend Development",
    description:"Diseño y desarrollo de aplicaciones escalables utilizando Django y Django REST Framework.",
  },
  {
    icon: "🌐",
    title: "APIs REST",
    description:"Construcción de APIs limpias, seguras y fáciles de consumir desde cualquier frontend.",
  },
  {
    icon: "🗄️",
    title: "Bases de Datos",
    description:"Modelado de datos, relaciones y consultas optimizadas con bases de datos relacionales.",
  },
  {
    icon: "💻",
    title: "Frontend Moderno",
    description:"Interfaces modernas con React, TypeScript y Tailwind CSS priorizando rendimiento y experiencia de usuario.",
  },
]

const AboutHighlights = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {highlights.map((highlight) => (
        <article key={highlight.title} className=" rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10">
          <div className="mb-4 text-3xl">
            {highlight.icon}
          </div>

          <h4 className="mb-3 text-lg font-semibold text-slate-100">
            {highlight.title}
          </h4>

          <p className="text-sm leading-7 text-slate-400">
            {highlight.description}
          </p>
        </article>
      ))}
    </div>
  )
}

export default AboutHighlights