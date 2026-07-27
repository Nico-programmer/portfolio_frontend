import useActiveSection from "../../../hooks/useActiveSection";

const links = [
  {
    id: "home",
    label: "Inicio",
  },
  {
    id: "about",
    label: "Sobre mí",
  },
  {
    id: "technologies",
    label: "Tecnologías",
  },
  {
    id: "projects",
    label: "Proyectos",
  },
  {
    id: "experience",
    label: "Experiencia",
  },
  {
    id: "education",
    label: "Educación",
  },
  {
    id: "contact",
    label: "Contacto",
  },
];

const NavbarLinks = () => {
  const activeSection = useActiveSection();

  return (
    <div
      className="
        hidden
        items-center
        gap-8
        lg:flex
      "
    >
      {links.map((link) => {
        const active = activeSection === link.id;

        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`
              relative
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                active ? "text-indigo-400" : "text-slate-300 hover:text-white"
              }

              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:bg-indigo-500
              after:transition-all
              after:duration-300

              ${
                active ? "after:w-full" : "after:w-0 hover:after:w-full"
              }
            `}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
};

export default NavbarLinks;