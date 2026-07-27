import { X } from "lucide-react"

import Modal from "../../UI/Modal/Modal"

import ProjectGallery from "./ProjectGallery"
import ProjectTechnologies from "./ProjectTechnologies"
import ProjectLinks from "./ProjectLinks"

import type { Project } from "../../../types/portfolio"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) => {
  if (!project) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-8 p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            {project.title}
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-full
              p-2
              transition-colors
              hover:bg-slate-800
            "
          >
            <X />
          </button>

        </div>

        <ProjectGallery
          images={project.images}
        />

        <p className="leading-8 text-slate-300">
          {project.description}
        </p>

        <ProjectTechnologies
            technologies={project.technologies}
        />

        <ProjectLinks
          githubUrl={project.github_url}
          demoUrl={project.demo_url}
        />

      </div>
    </Modal>
  )
}

export default ProjectModal