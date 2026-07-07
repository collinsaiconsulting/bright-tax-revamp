import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "portal";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-90",
  outline:
    "border border-border bg-transparent text-foreground hover:border-foreground/60 hover:bg-foreground/5",
  portal:
    "liquid-glass text-foreground hover:opacity-90",
};

interface ButtonAsButton extends CommonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}
interface ButtonAsLink extends CommonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function AnimatedButton(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", children, className = "", icon, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        <span className="relative z-[2]">{children}</span>
        {icon && <span className="relative z-[2]">{icon}</span>}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonRest}>
      <span className="relative z-[2]">{children}</span>
      {icon && <span className="relative z-[2]">{icon}</span>}
    </button>
  );
}
