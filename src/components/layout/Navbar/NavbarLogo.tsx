const NavbarLogo = () => {
  return (
    <a
      href="#hero"
      className="
        flex
        items-center
        gap-3
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-indigo-500
          via-violet-500
          to-blue-500
          font-bold
          text-white
          shadow-lg
          shadow-indigo-500/30
        "
      >
        NP
      </div>

      <div className="hidden sm:block">

        <p className="font-semibold">
          Nicolás Paulo
        </p>

        <p
          className="
            text-sm
            text-slate-400
          "
        >
          Full Stack Developer
        </p>

      </div>
    </a>
  );
};

export default NavbarLogo;