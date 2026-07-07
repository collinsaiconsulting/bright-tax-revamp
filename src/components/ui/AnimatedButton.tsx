import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "portal";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const base =
  "btn-anim inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(.19,1,.22,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-forest-800)] text-[var(--color-parchment-50)] shadow-[0_10px_30px_-10px_rgba(12,31,24,0.55)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(12,31,24,0.6)] focus-visible:outline-[var(--color-brass-500)]",
  outline:
    "border border-[var(--color-forest-700)]/30 bg-white/40 text-[var(--color-forest-800)] backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/70 hover:border-[var(--color-forest-700)]/60 focus-visible:outline-[var(--color-forest-700)]",
  portal:
    "border border-[var(--color-brass-400)]/70 bg-gradient-to-br from-[var(--color-brass-300)]/25 via-white/10 to-[var(--color-brass-500)]/20 text-[var(--color-forest-900)] backdrop-blur-md shadow-[0_6px_18px_-8px_rgba(201,154,68,0.55)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(201,154,68,0.65)] focus-visible:outline-[var(--color-brass-500)]",
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
