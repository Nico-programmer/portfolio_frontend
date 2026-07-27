import { forwardRef } from "react";

import {
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface ContactTextareaProps {
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const MAX_CHARACTERS = 1000;

const ContactTextarea = forwardRef<
  HTMLTextAreaElement,
  ContactTextareaProps
>(
  (
    {
      label,
      value,
      error,
      placeholder,
      onChange,
    },
    ref
  ) => {
    const hasValue = value.trim().length > 0;

    const isValid = hasValue && !error;

    const characters = value.length;

    return (
      <div className="space-y-2">
        <label
          className="
            text-sm
            font-medium
            text-slate-300
          "
        >
          {label}
        </label>

        <div className="relative">
          <textarea
            ref={ref}
            rows={7}
            maxLength={MAX_CHARACTERS}
            value={value}
            placeholder={placeholder}
            onChange={(e) =>
              onChange(e.target.value)
            }
            className={`
              w-full
              resize-none
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
                  ? "border-red-500"
                  : isValid
                  ? "border-green-500"
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
                top-4
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
                top-4
                text-green-400
              "
            />
          )}
        </div>

        <div className="flex items-center justify-between">
          {error ? (
            <p className="text-sm text-red-400">
              {error}
            </p>
          ) : (
            <span />
          )}

          <span
            className={`
              text-sm
              ${
                characters > 900
                  ? "text-amber-400"
                  : "text-slate-500"
              }
            `}
          >
            {characters} / {MAX_CHARACTERS}
          </span>
        </div>
      </div>
    );
  }
);

ContactTextarea.displayName = "ContactTextarea";

export default ContactTextarea;