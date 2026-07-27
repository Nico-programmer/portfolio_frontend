import { useState } from "react";

import { sendContact } from "../api/contact";

import type { ContactFormData } from "../types/contact";

const initialState: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  honeypot: "",
};

export const useContact = () => {
  const [form, setForm] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const [fieldErrors, setFieldErrors] = useState<
    Record<string, string>
  >({});

  const updateField = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const submit = async () => {
    setLoading(true);

    setSuccess("");

    setError("");

    setFieldErrors({});

    try {
      const response = await sendContact(form);

      setSuccess(response.message);

      setForm(initialState);

      return true;
    } catch (err: any) {
      if (err.response?.status === 400) {
        const backendErrors = err.response.data;

        const formattedErrors: Record<string, string> = {};

        Object.entries(backendErrors).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            formattedErrors[key] = value[0];
          }
        });

        setFieldErrors(formattedErrors);

        return false;
      }

      setError(
        err.response?.data?.message ??
          "Ocurrió un error al enviar el mensaje."
      );

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    form,

    loading,

    success,

    error,

    fieldErrors,

    updateField,

    submit,
  };
};