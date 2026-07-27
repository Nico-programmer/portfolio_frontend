import { LoaderCircle, Send } from "lucide-react";

interface ContactSubmitButtonProps {
  loading: boolean;
}

const ContactSubmitButton = ({
  loading,
}: ContactSubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        bg-indigo-600
        px-6
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-indigo-500
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {loading ? (
        <>
          <LoaderCircle
            size={20}
            className="animate-spin"
          />

          Enviando...
        </>
      ) : (
        <>
          <Send size={20} />

          Enviar mensaje
        </>
      )}
    </button>
  );
};

export default ContactSubmitButton;