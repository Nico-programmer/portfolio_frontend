import { useState } from "react";

import type { ProjectImage } from "../../../types/portfolio"

import { getMediaUrl } from "../../../utils/media"

interface ProjectGalleryProps {
  images: ProjectImage[]
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div
        className="
          flex
          aspect-video
          items-center
          justify-center
          rounded-2xl
          bg-slate-800
          text-slate-500
        "
      >
        No hay imágenes disponibles
      </div>
    )
  }

  const selectedImage = getMediaUrl(images[selectedIndex].image)

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl bg-slate-800">
        <img
          src={selectedImage ?? ""}
          alt={images[selectedIndex].alt_text}
          className="
            aspect-video
            w-full
            object-cover
          "
        />
      </div>

      <div className="flex gap-3 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className={`
              overflow-hidden
              rounded-xl
              border-2
              transition-all

              ${
                selectedIndex === index
                  ? "border-indigo-500"
                  : "border-transparent"
              }
            `}
          >
            <img
              src={getMediaUrl(image.image) ?? ""}
              alt={image.alt_text}
              className="
                h-20
                w-32
                object-cover
              "
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProjectGallery