import { useRef } from "react";
import ScrollReveal from "./ui/ScrollReveal";

export default function About() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  const handleLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
  };

  return (
    <section id="about" className="bg-background px-8 py-28 md:px-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            About Bright Tax
          </p>
          <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-1px] text-foreground sm:text-5xl">
            A firm built on{" "}
            <span className="font-serif font-normal italic text-accent">trust</span>,
            decades in the making.
          </h2>
          <p className="mt-6 text-muted-foreground">
            For over 35 years, Bright Tax Solutions has helped entrepreneurs,
            medical practices, and community organizations across South
            Florida navigate tax season with confidence. We speak English,
            Haitian Creole, and Spanish — because clear tax guidance
            shouldn't depend on which language you think in.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Enrolled agents and seasoned preparers on every return",
              "Year-round planning, not just April filings",
              "Bilingual and multicultural client support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <div
          ref={tiltRef}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          className="relative aspect-[4/5] w-full rounded-3xl border border-border bg-card transition-transform duration-300 ease-out will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 rounded-3xl opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 20%, hsl(12 62% 64% / 0.16), transparent 55%), radial-gradient(circle at 80% 80%, hsl(287 39% 14% / 0.05), transparent 60%)",
            }}
          />
          <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-md">
            <p className="font-serif text-2xl italic text-foreground">
              "We treat every return like it's the only one that matters."
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              — The Bright Tax Solutions team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
