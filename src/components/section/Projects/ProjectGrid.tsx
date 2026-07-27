import type { Project } from "../../../types/portfolio"
import ProjectCard from "./ProjectCard"

import StaggerContainer from "../../UI/Animation/StaggerContainer";
import StaggerItem from "../../UI/Animation/StaggerItem";

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid = ({
  projects,
  onProjectClick,
}: ProjectGridProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      <StaggerContainer>
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

export default ProjectGrid