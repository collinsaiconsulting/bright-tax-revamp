// TODO: replace with the real external client portal URL when available.
const CLIENT_PORTAL_URL = "#client-portal-placeholder";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", chevron: true },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact us", href: "#contact" },
];

const ChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Navbar() {
  return (
    <header className="relative z-40 flex items-center justify-between px-8 py-4 md:px-28">
      <div className="flex items-center gap-12 md:gap-20">
        <a href="#home" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Bright Tax Solutions logo" className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Bright Tax
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              {link.chevron && <ChevronDown />}
            </a>
          ))}
        </nav>
      </div>

      <a
        href={CLIENT_PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-85"
      >
        Client Portal
      </a>
    </header>
  );
}
