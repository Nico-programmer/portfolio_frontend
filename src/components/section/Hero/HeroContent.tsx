import type { Biography, Technology } from "../../../types/portfolio"

import Badge from "../../UI/Badge/Badge"
import Button from "../../UI/Button"

interface HeroContentProps {
  biography: Biography
  technologies: Technology[]
}

const HeroContent = ({
  biography,
  technologies,
}: HeroContentProps) => {
  return (
    <div className="space-y-8">

      <p className="text-lg font-medium text-primary">
        Hola, soy 👋
      </p>


      <div>
        <h1
          className="
            text-5xl
            font-extrabold
            tracking-tight
            text-text
            md:text-6xl
          "
        >
          {biography.full_name}
        </h1>


        <h2
          className="
            mt-4
            text-2xl
            font-semibold
            text-text-muted
          "
        >
          {biography.profession}
        </h2>
      </div>


      {
        biography.available_for_work && (
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-500/30
              bg-green-500/10
              px-4
              py-2
              text-sm
              text-green-400
            "
          >
            <span className="h-2 w-2 rounded-full bg-green-400" />

            Disponible para trabajar
          </div>
        )
      }


      <p
        className="
          max-w-2xl
          text-lg
          leading-8
          text-text-muted
        "
      >
        {biography.about}
      </p>


      <div className="flex flex-wrap gap-4">

        {
          biography.cv && (
            <Button
              href={biography.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </Button>
          )
        }


        <Button
          href="#contact"
          variant="outline"
        >
          Contactarme
        </Button>

      </div>


      {
        technologies.length > 0 && (
          <div className="space-y-4">

            <p className="text-sm font-medium text-text-muted">
              Tecnologías principales
            </p>


            <div className="flex flex-wrap gap-3">

              {
                technologies
                  .slice(0, 6)
                  .map((technology) => (
                    <Badge key={technology.id}>
                      {technology.name}
                    </Badge>
                  ))
              }

            </div>

          </div>
        )
      }


    </div>
  )
}

export default HeroContent