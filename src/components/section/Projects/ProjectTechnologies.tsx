import type { Technology } from "../../../types/portfolio"

interface ProjectTechnologiesProps {
  technologies: Technology[]
}

const CATEGORY_NAMES: Record<string, string> = {
  language: "Lenguajes",
  frontend: "Frontend",
  backend: "Backend",
  database: "Base de datos",
  devops: "DevOps",
  tool: "Herramientas",
}

const ProjectTechnologies = ({
  technologies,
}: ProjectTechnologiesProps) => {
  if (technologies.length === 0) return null

  const grouped = technologies.reduce<Record<string, Technology[]>>(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = []
      }

      acc[tech.category].push(tech)

      return acc;
    },
    {}
  )

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">
        Tecnologías utilizadas
      </h3>

      {Object.entries(grouped).map(([category, techs]) => (
        <div key={category} className="space-y-3">
          <h4 className="text-sm font-medium uppercase tracking-wider text-slate-400">
            {CATEGORY_NAMES[category] ?? category}
          </h4>

          <div className="flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech.id}
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
                  transition
                  hover:border-indigo-400
                  hover:bg-indigo-500/20
                "
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectTechnologies