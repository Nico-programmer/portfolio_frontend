import type { Technology } from "../../../types/portfolio";

import Container from "../../UI/Container/Container"
import Section from "../../UI/Section/Section"
import SectionTitle from "../../UI/SectionTitle/SectionTitle"

import TechnologyCategory from "./TechnologyCategory"

interface TechnologiesProps {
  technologies: Technology[];
}

const CATEGORY_LABELS: Record<string, string> = {
  language: "Lenguajes",
  frontend: "Frontend",
  backend: "Backend",
  database: "Bases de Datos",
  devops: "DevOps",
  tool: "Herramientas",
};

const Technologies = ({ technologies }: TechnologiesProps) => {
  const groupedTechnologies = technologies.reduce(
    (groups, technology) => {
      const category = technology.category

      if (!groups[category]) {
        groups[category] = []
      }

      groups[category].push(technology)

      return groups
    },
    {} as Record<string, Technology[]>
  )

  return (
    <Section id="technologies">
      <Container>
        <SectionTitle
          title="Tecnologías"
          subtitle="Estas son las principales herramientas que utilizo para diseñar y desarrollar aplicaciones modernas."
        />

        <div className="mt-16 space-y-16">
          {Object.entries(groupedTechnologies).map(
            ([category, technologies]) => (
              <TechnologyCategory
                key={category}
                title={CATEGORY_LABELS[category] ?? category}
                technologies={technologies}
              />
            )
          )}
        </div>
      </Container>
    </Section>
  )
}

export default Technologies