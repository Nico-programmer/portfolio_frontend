import type { Biography } from "../../../types/portfolio";

import Container from "../../UI/Container/Container"
import Section from "../../UI/Section/Section"
import SectionTitle from "../../UI/SectionTitle/SectionTitle"

import AboutContent from "./AboutContent"
import AboutHighlights from "./AboutHighlights"

import FadeUp from "../../UI/Animation/FadeUp"

interface AboutProps {
  biography: Biography
}

const About = ({ biography }: AboutProps) => {
  return (
    <Section id="about">
      <Container>
        <FadeUp>
          <SectionTitle
            title="Sobre mí"
            subtitle="Conoce un poco más sobre quién soy, mi forma de trabajar y lo que disfruto construir."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <AboutContent biography={biography} />

            <AboutHighlights />
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}

export default About