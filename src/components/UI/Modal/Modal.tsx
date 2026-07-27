import type { ReactNode } from "react"
import { useEffect } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // Cerrar con la tecla Escape
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  // Bloquear el scroll del body
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-4
      "
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/70
          backdrop-blur-sm
          transition-opacity
          duration-300
        "
      />

      {/* Contenido */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          z-10
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          shadow-2xl

          animate-[modal_0.25s_ease-out]
        "
      >
        {children}
      </div>

      <style>
        {`
          @keyframes modal {
            from {
              opacity: 0;
              transform: scale(.96) translateY(10px);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default Modal