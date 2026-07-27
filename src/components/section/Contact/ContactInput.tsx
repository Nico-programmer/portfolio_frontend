import { forwardRef } from "react";

import {
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface ContactInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

const ContactInput = forwardRef<
  HTMLInputElement,
  ContactInputProps
>(
  (
    {
      label,
      name,
      type = "text",
      value,
      placeholder,
      error,
      onChange,
    },
    ref
  ) => {
    const hasValue = value.trim().length > 0;

    const isValid = hasValue && !error;

    return (
      <div className="space-y-2">
        <label
          htmlFor={name}
          className="text-sm font-medium text-slate-300"
        >
          {label}
        </label>

        <div className="relative">
          <input
            ref={ref}
            id={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={`
              w-full
              rounded-xl
              border
              bg-slate-950
              px-4
              py-3
              pr-12
              text-white
              outline-none
              transition-all
              duration-300

              ${
                error
                  ? "border-red-500 focus:border-red-500"
                  : isValid
                  ? "border-green-500 focus:border-green-500"
                  : "border-slate-700 focus:border-indigo-500"
              }
            `}
          />

          {error && (
            <AlertCircle
              size={20}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-red-400
              "
            />
          )}

          {!error && isValid && (
            <CheckCircle
              size={20}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-green-400
              "
            />
          )}
        </div>

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

ContactInput.displayName = "ContactInput";

export default ContactInput;