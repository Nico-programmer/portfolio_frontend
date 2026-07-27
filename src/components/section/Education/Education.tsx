import type { Education as EducationType } from "../../../types/portfolio";

import Section from "../../UI/Section/Section";
import Container from "../../UI/Container/Container";
import FadeUp from "../../UI/Animation/FadeUp";

import EducationHeader from "./EducationHeader";
import EducationTimeline from "./EducationTimeline";

interface EducationProps {
  education: EducationType[];
}

const Education = ({ education }: EducationProps) => {
  return (
    <Section id="education">
      <Container>

        <div className="space-y-24">

          <EducationHeader
            total={education.length}
          />

          <FadeUp>
            <EducationTimeline
              education={education}
            />
          </FadeUp>

        </div>

      </Container>
    </Section>
  );
};

export default Education;