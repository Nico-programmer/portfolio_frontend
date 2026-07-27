const ContactHeader = () => {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span
        className="
          rounded-full
          border
          border-indigo-500/30
          bg-indigo-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-indigo-300
        "
      >
        Contacto
      </span>

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          text-white
          md:text-5xl
        "
      >
        ¿Trabajamos juntos?
      </h2>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-400
        "
      >
        Si tienes una oportunidad laboral, una idea de proyecto o simplemente
        quieres saludar, estaré encantado de leerte.
      </p>

    </div>
  );
};

export default ContactHeader;