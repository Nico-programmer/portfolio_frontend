import type { Experience } from "../../../types/portfolio"

import Section from "../../UI/Section/Section"
import Container from "../../UI/Container/Container"

import ExperienceHeader from "./ExperienceHeader"
import ExperienceTimeline from "./ExperienceTimeline"

import FadeUp from "../../UI/Animation/FadeUp"

interface ExperienceProps {
  experiences: Experience[]
}

const ExperienceSection = ({
  experiences,
}: ExperienceProps) => {
  return (
    <Section id="experience">
      <Container>
        <ExperienceHeader total={experiences.length} />

        <FadeUp>
          <ExperienceTimeline
            experiences={experiences}
          />
        </FadeUp>
      </Container>
    </Section>
  );
};

export default ExperienceSection