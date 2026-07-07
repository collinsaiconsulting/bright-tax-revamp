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
    <section id="services" className="bg-background px-8 py-28 md:px-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Who we serve
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-[-1px] text-foreground sm:text-5xl">
            Every service,{" "}
            <span className="font-serif font-normal italic text-accent">clear</span>{" "}
            at a glance.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
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
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/40"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
              />
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-lg text-foreground transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {sector.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {sector.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {sector.blurb}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
