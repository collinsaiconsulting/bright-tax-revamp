import { useEffect, useState } from "react";
import { AnimatedButton } from "./ui/AnimatedButton";

// TODO: replace with the real external client portal URL when available.
const CLIENT_PORTAL_URL = "#client-portal-placeholder";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-forest-950)]/85 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(12,31,24,0.35)]"
          : "bg-gradient-to-b from-[var(--color-forest-950)]/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-[var(--color-parchment-50)]">
            Bright Tax
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-[var(--color-brass-500)] sm:block" />
          <span className="hidden font-display text-xl font-light italic text-[var(--color-brass-300)] sm:block">
            Solutions
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm font-medium text-[var(--color-parchment-200)]/90 hover:text-[var(--color-parchment-50)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <AnimatedButton
            href={CLIENT_PORTAL_URL}
            variant="portal"
            target="_blank"
            rel="noopener noreferrer"
            className="!px-5 !py-2.5 !text-xs"
          >
            Client Portal
          </AnimatedButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-[var(--color-parchment-50)] transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[var(--color-parchment-50)] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[var(--color-parchment-50)] transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(.19,1,.22,1)] lg:hidden ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 bg-[var(--color-forest-950)]/95 px-6 pb-6 backdrop-blur-md">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-base font-medium text-[var(--color-parchment-200)]/90"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <AnimatedButton
              href={CLIENT_PORTAL_URL}
              variant="portal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Client Portal
            </AnimatedButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
