import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "outline";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonProps =
  | (BaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

const baseClasses =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300";

const variants = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500 hover:-translate-y-1",
  outline:
    "border border-slate-700 text-slate-200 hover:border-indigo-500 hover:text-indigo-400 hover:-translate-y-1",
};

const Button = (props: ButtonProps) => {
  const classes = `${baseClasses} ${variants[props.variant ?? "primary"]} ${props.className ?? ""}`;

  if ("href" in props && props.href) {
    return (
      <a
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={classes}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {props.children}
    </button>
  );
};

export default Button;