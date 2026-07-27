import { useRef, useState } from "react";

import { useContact } from "../../../hooks/useContact";

import type { ContactErrors } from "../../../utils/contactValidation";

import {
  validateContactField,
  validateContactForm,
} from "../../../utils/contactValidation";

import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";
import ContactSubmitButton from "./ContactSubmitButton";

const ContactForm = () => {
  const {
    form,
    loading,
    success,
    error,
    fieldErrors,
    updateField,
    submit,
  } = useContact();

  const [errors, setErrors] =
    useState<ContactErrors>({});

  const nameRef =
    useRef<HTMLInputElement>(null);

  const emailRef =
    useRef<HTMLInputElement>(null);

  const subjectRef =
    useRef<HTMLInputElement>(null);

  const messageRef =
    useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const validation =
      validateContactForm(form);

    setErrors(validation);

    if (validation.name) {
      nameRef.current?.focus();
      return;
    }

    if (validation.email) {
      emailRef.current?.focus();
      return;
    }

    if (validation.subject) {
      subjectRef.current?.focus();
      return;
    }

    if (validation.message) {
      messageRef.current?.focus();
      return;
    }

    await submit();
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h3 className="text-2xl font-bold text-white">
        Envíame un mensaje
      </h3>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ContactInput
            ref={nameRef}
            label="Nombre"
            name="name"
            value={form.name}
            placeholder="Tu nombre"
            error={errors.name || fieldErrors.name}
            onChange={(value) => {
              updateField("name", value);

              setErrors((prev) => ({
                ...prev,
                name: validateContactField("name", value),
              }));
            }}
          />

          <ContactInput
            ref={emailRef}
            label="Correo"
            name="email"
            type="email"
            value={form.email}
            placeholder="correo@ejemplo.com"
            error={errors.email || fieldErrors.email}
            onChange={(value) => {
              updateField("email", value);

              setErrors((prev) => ({
                ...prev,
                email: validateContactField("email", value),
              }));
            }}
          />
        </div>

        <ContactInput
          ref={subjectRef}
          label="Asunto"
          name="subject"
          value={form.subject}
          placeholder="¿Sobre qué deseas hablar?"
          error={errors.subject || fieldErrors.subject}
          onChange={(value) => {
            updateField("subject", value);

            setErrors((prev) => ({
              ...prev,
              subject: validateContactField("subject", value),
            }));
          }}
        />

        <ContactTextarea
          ref={messageRef}
          label="Mensaje"
          value={form.message}
          placeholder="Escribe tu mensaje..."
          error={errors.message || fieldErrors.message}
          onChange={(value) => {
            updateField("message", value);

            setErrors((prev) => ({
              ...prev,
              message: validateContactField("message", value),
            }));
          }}
        />

        <input
          type="text"
          value={form.honeypot}
          onChange={(e) =>
            updateField("honeypot", e.target.value)
          }
          className="hidden"
          autoComplete="off"
          tabIndex={-1}
        />

        {success && (
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
            {success}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        <ContactSubmitButton loading={loading} />
      </form>
    </div>
  );
};

export default ContactForm;