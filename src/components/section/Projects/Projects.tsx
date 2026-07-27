import { useState } from "react"

import type { Project } from "../../../types/portfolio"

import Section from "../../UI/Section/Section"
import Container from "../../UI/Container/Container"

import ProjectGrid from "./ProjectGrid"
import ProjectModal from "./ProjectModal"

interface ProjectsProps {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project)
  };

  const handleCloseProject = () => {
    setSelectedProject(null)
  };

  return (
    <Section id="projects">
      <Container>
        <ProjectGrid
          projects={projects}
          onProjectClick={handleOpenProject}
        />

        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={handleCloseProject}
        />
      </Container>
    </Section>
  )
}

export default Projects