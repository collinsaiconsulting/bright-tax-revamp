import ScrollReveal from "./ui/ScrollReveal";

const SECTORS = [
  { name: "Entrepreneurs", blurb: "Tax strategy for founders scaling a new venture.", icon: "◆" },
  { name: "Small Businesses", blurb: "Bookkeeping, filings, and planning built to grow with you.", icon: "▲" },
  { name: "Lawyers & Attorneys", blurb: "Practice-specific structuring and compliance support.", icon: "⚖" },
  { name: "Restaurants", blurb: "Payroll, tip reporting, and margin-aware tax planning.", icon: "●" },
  { name: "Doctors & Medical Practices", blurb: "Entity structuring built for high-earning practices.", icon: "✚" },
  { name: "Condominiums & Associations", blurb: "Specialized filings for community associations.", icon: "◈" },
  { name: "Non-Profit Organizations", blurb: "990 filings and compliance for mission-driven teams.", icon: "◎" },
  { name: "Construction", blurb: "Job costing and multi-entity tax coordination.", icon: "▣" },
  { name: "Religious Organizations", blurb: "Clergy tax rules and congregation compliance handled right.", icon: "✧" },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[var(--color-parchment-50)] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brass-500)]">
            Who we serve
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light text-[var(--color-forest-900)] sm:text-5xl">
            Every service, clear at a glance.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-ink-700)]">
            From first-year founders to decades-old practices, our nine
            specialty tracks mean your tax strategy is built by people who
            already understand your industry.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector, i) => (
            <ScrollReveal
              key={sector.name}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-forest-700)]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-brass-400)]/50 hover:shadow-[0_24px_48px_-20px_rgba(12,31,24,0.25)]"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(201,154,68,0.35), transparent 70%)" }}
              />
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-forest-900)] text-lg text-[var(--color-brass-300)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {sector.icon}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium text-[var(--color-forest-900)]">
                {sector.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-500)]">
                {sector.blurb}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
