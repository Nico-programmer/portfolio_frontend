import { ArrowRight } from "lucide-react"

import type { Project } from "../../../types/portfolio"

import { getMediaUrl } from "../../../utils/media"

import ProjectBadge from "./ProjectBadge"

interface ProjectCardProps {
    project: Project
    onClick: () => void
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const coverImage = getMediaUrl(project.thumbnail)

  return (
    <article
        onClick={onClick}
        className="
            group
            cursor-pointer
            overflow-hidden
            rounded-2xl
            bg-slate-900
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            hover:shadow-indigo-500/20
        "
    >
      <div className="aspect-video overflow-hidden bg-slate-800">
        {coverImage ? (
          <img
              src={coverImage ?? ""}
              alt={project.title}
              className="
                  h-56
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
              "
          />
        ) : (
          <div
            className="
              flex
              h-full
              items-center
              justify-center
              text-slate-500
            "
          >
            Sin imagen
          </div>
        )}
      </div>

      <div className="space-y-5 p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <ProjectBadge
          status={project.status}
          featured={project.featured}
        />

        <p className="line-clamp-3 text-slate-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology.id}
              className="
                rounded-full
                bg-indigo-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-indigo-300
              "
            >
              {technology.name}
            </span>
          ))}
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            font-medium
            text-indigo-400
            transition-colors
            duration-300
            hover:text-indigo-300
          "
        >
          Ver detalles

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  )
}

export default ProjectCard