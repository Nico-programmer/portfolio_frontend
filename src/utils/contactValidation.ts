import type { ContactFormData } from "../types/contact";

export type ContactErrors = Partial<
  Record<keyof ContactFormData, string>
>;

export const validateContactField = (
  field: keyof ContactFormData,
  value: string
): string => {
  switch (field) {
    case "name":
      if (!value.trim()) {
        return "El nombre es obligatorio.";
      }

      if (value.trim().length < 3) {
        return "Debe contener al menos 3 caracteres.";
      }

      return "";

    case "email":
      if (!value.trim()) {
        return "El correo es obligatorio.";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Correo electrónico inválido.";
      }

      return "";

    case "subject":
      if (!value.trim()) {
        return "El asunto es obligatorio.";
      }

      return "";

    case "message":
      if (!value.trim()) {
        return "El mensaje es obligatorio.";
      }

      if (value.trim().length < 20) {
        return "Debe contener al menos 20 caracteres.";
      }

      return "";

    default:
      return "";
  }
};

export const validateContactForm = (
  form: ContactFormData
): ContactErrors => ({
  name: validateContactField("name", form.name),
  email: validateContactField("email", form.email),
  subject: validateContactField("subject", form.subject),
  message: validateContactField("message", form.message),
});