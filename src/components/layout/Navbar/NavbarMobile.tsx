import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  Menu,
  X,
  Download,
} from "lucide-react";

const links = [
  {
    label: "Inicio",
    href: "#home",
  },
  {
    label: "Sobre mí",
    href: "#about",
  },
  {
    label: "Tecnologías",
    href: "#technologies",
  },
  {
    label: "Proyectos",
    href: "#projects",
  },
  {
    label: "Experiencia",
    href: "#experience",
  },
  {
    label: "Educación",
    href: "#education",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu
          size={30}
          className="text-white"
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/70
                backdrop-blur-sm
              "
            />

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: .35,
              }}
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-screen
                w-80
                flex-col
                border-l
                border-slate-800
                bg-slate-950
                p-8
              "
            >
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-bold">
                    Nicolás Paulo
                  </h2>

                  <p className="text-sm text-slate-400">
                    Full Stack Developer
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                >
                  <X size={28} />
                </button>

              </div>

              <nav className="mt-14 flex flex-1 flex-col gap-6">

                {links.map((link) => (
                  <motion.a
                    whileHover={{
                      x: 6,
                    }}
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      setOpen(false)
                    }
                    className="
                      text-lg
                      text-slate-300
                      transition-colors
                      hover:text-indigo-400
                    "
                  >
                    {link.label}
                  </motion.a>
                ))}

              </nav>

              <a
                href="/cv.pdf"
                download
                className="
                  mt-10
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-indigo-600
                  px-6
                  py-4
                  font-medium
                  transition-colors
                  hover:bg-indigo-500
                "
              >
                <Download size={20} />

                Descargar CV
              </a>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMobile;