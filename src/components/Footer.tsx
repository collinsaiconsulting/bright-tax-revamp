const CLIENT_PORTAL_URL = "#client-portal-placeholder"; // TODO: swap for real portal URL

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest-950)] px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-white/10 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg text-[var(--color-parchment-50)]">Bright Tax Solutions</p>
          <p className="mt-1 text-sm text-[var(--color-parchment-200)]/50">
            © {new Date().getFullYear()} Bright Tax Solutions. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-parchment-200)]/70">
          <a href="#services" className="hover:text-[var(--color-brass-300)]">Services</a>
          <a href="#about" className="hover:text-[var(--color-brass-300)]">About</a>
          <a href="#contact" className="hover:text-[var(--color-brass-300)]">Contact</a>
          <a
            href={CLIENT_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brass-300)] hover:text-[var(--color-brass-400)]"
          >
            Client Portal →
          </a>
        </div>
      </div>
    </footer>
  );
}
