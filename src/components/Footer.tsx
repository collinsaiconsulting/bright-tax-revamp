const CLIENT_PORTAL_URL = "#client-portal-placeholder"; // TODO: swap for real portal URL

export default function Footer() {
  return (
    <footer className="bg-background px-8 py-12 md:px-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-border pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="flex items-center justify-center gap-2.5 sm:justify-start">
            <img src="/logo.svg" alt="" className="h-6 w-6" />
            <p className="text-lg font-bold tracking-tight text-foreground">
              Bright Tax Solutions
            </p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bright Tax Solutions. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          <a
            href={CLIENT_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-opacity hover:opacity-80"
          >
            Client Portal →
          </a>
        </div>
      </div>
    </footer>
  );
}
