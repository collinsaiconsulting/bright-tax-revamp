import ScrollReveal from "./ui/ScrollReveal";

const REVIEWS = [
  { quote: "Bright Tax caught deductions our old accountant never mentioned. Worth every penny.", name: "M. Alexandre", role: "Restaurant Owner" },
  { quote: "They explain everything in plain language — in Creole, which meant the world to my mother.", name: "J. Registre", role: "Small Business Owner" },
  { quote: "Our practice's entity structure finally makes sense. Filing season stopped being stressful.", name: "Dr. R. Fontaine", role: "Medical Practice" },
  { quote: "Responsive, precise, and genuinely invested in our nonprofit's mission.", name: "S. Bertrand", role: "Non-Profit Director" },
];

export default function Testimonials() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section id="testimonials" className="overflow-hidden bg-[var(--color-parchment-100)] py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brass-500)]">
            Client stories
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-[var(--color-forest-900)] sm:text-5xl">
            Trusted across South Florida.
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max gap-6 px-6">
          {loop.map((r, i) => (
            <blockquote
              key={`${r.name}-${i}`}
              className="w-[22rem] shrink-0 rounded-2xl border border-[var(--color-forest-700)]/10 bg-white p-8 shadow-[0_20px_40px_-24px_rgba(12,31,24,0.2)]"
            >
              <p className="font-display text-lg italic leading-relaxed text-[var(--color-forest-900)]">
                “{r.quote}”
              </p>
              <footer className="mt-6 text-sm">
                <span className="font-semibold text-[var(--color-forest-800)]">{r.name}</span>
                <span className="text-[var(--color-ink-500)]"> — {r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
