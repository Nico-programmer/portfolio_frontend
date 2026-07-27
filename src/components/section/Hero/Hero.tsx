import type { Biography, Technology } from "../../../types/portfolio"

import Container from "../../UI/Container/Container"
import Section from "../../UI/Section/Section"

import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"

import FadeIn from "../../UI/Animation/FadeIn"

interface HeroProps {
  biography: Biography
  technologies: Technology[]
}

const Hero = ({ biography, technologies }: HeroProps) => {
  return (
    <FadeIn>
      <Section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-slate-950 to-slate-950"/>

        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Imagen */}
            <div className="order-1 lg:order-2">
              <HeroImage biography={biography} />
            </div>

            {/* Contenido */}
            <div className="order-2 lg:order-1">
              <HeroContent
                biography={biography}
                technologies={technologies}
              />
            </div>
          </div>
        </Container>
      </Section>
    </FadeIn>
  )
}

export default Hero