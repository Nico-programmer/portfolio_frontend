const ContactSocials = () => {
  return (
    <div className="mt-12">

      <h4
        className="
          mb-4
          text-lg
          font-semibold
          text-white
        "
      >
        Redes
      </h4>

      <div className="flex flex-wrap gap-3">

        <a
          href="https://github.com/Nico-programmer"
          className="
            rounded-xl
            border
            border-slate-700
            px-4
            py-2
            text-slate-300
            transition-colors
            hover:border-indigo-500
            hover:text-white
          "
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nicolas-paulo-vega-73365928b/"
          className="
            rounded-xl
            border
            border-slate-700
            px-4
            py-2
            text-slate-300
            transition-colors
            hover:border-indigo-500
            hover:text-white
          "
        >
          LinkedIn
        </a>

        {/* <a
          href="#"
          className="
            rounded-xl
            border
            border-slate-700
            px-4
            py-2
            text-slate-300
            transition-colors
            hover:border-indigo-500
            hover:text-white
          "
        >
          Descargar CV
        </a> */}

      </div>

    </div>
  );
};

export default ContactSocials;