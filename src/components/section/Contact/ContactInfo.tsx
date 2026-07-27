import ContactSocials from "./ContactSocials";

const ContactInfo = () => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
      "
    >
      <h3
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        Información de contacto
      </h3>

      <div className="mt-10 space-y-6">

        <div>
          <p className="text-sm text-slate-500">
            Correo
          </p>

          <p className="mt-1 text-white">
            nicolas.paulo.vega06@gmail.com
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            WhatsApp
          </p>

          <p className="mt-1 text-white">
            +57 310 275 306
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Ubicación
          </p>

          <p className="mt-1 text-white">
            Ibague, Tolima - Colombia
          </p>
        </div>

      </div>

      <ContactSocials />

    </div>
  );
};

export default ContactInfo;