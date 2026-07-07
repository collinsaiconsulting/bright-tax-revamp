import { useRef } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
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
    <section id="about" className="bg-[var(--color-parchment-100)] px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div
          ref={(node) => {
            ref.current = node;
          }}
          className={`reveal ${visible ? "is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brass-500)]">
            About Bright Tax
          </p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-[var(--color-forest-900)] sm:text-5xl">
            A firm built on trust, decades in the making.
          </h2>
          <p className="mt-6 text-[var(--color-ink-700)]">
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
              <li key={item} className="flex items-start gap-3 text-[var(--color-ink-700)]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brass-500)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={tiltRef}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          className="relative aspect-[4/5] w-full rounded-[2rem] transition-transform duration-300 ease-out will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 rounded-[2rem]"
            style={{
              background:
                "linear-gradient(155deg, var(--color-forest-800), var(--color-forest-950) 60%)",
            }}
          />
          <div
            className="absolute inset-0 rounded-[2rem] opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 20%, rgba(201,154,68,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(47,98,73,0.5), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10" />
          <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <p className="font-display text-2xl italic text-[var(--color-parchment-50)]">
              "We treat every return like it's the only one that matters."
            </p>
            <p className="mt-3 text-sm text-[var(--color-parchment-200)]/70">
              — The Bright Tax Solutions team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
