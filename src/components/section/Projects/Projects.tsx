import { useState } from "react"

import type { Project } from "../../../types/portfolio"

import Section from "../../UI/Section/Section"
import Container from "../../UI/Container/Container"
import SectionTitle from "../../UI/SectionTitle/SectionTitle"

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
        <SectionTitle
          title="Proyectos"
          subtitle="Una muestra de los proyectos desarrollados a lo largo de mi trayectoria profesional."
        />

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