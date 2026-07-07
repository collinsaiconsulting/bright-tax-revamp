import ScrollReveal from "./ui/ScrollReveal";

const STEPS = [
  { n: "01", title: "Discovery call", copy: "We learn your business, your industry, and where taxes have cost you time or money." },
  { n: "02", title: "Strategy & structuring", copy: "We map a plan across entity structure, deductions, and quarterly planning." },
  { n: "03", title: "Filing & compliance", copy: "Returns are prepared, reviewed, and filed with nothing left to chance." },
  { n: "04", title: "Year-round partnership", copy: "We stay in your corner for estimated payments, audits, and growth decisions." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[var(--color-forest-950)] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brass-300)]">
            How we work
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light text-[var(--color-parchment-50)] sm:text-5xl">
            A process built for clarity, not paperwork.
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-brass-400)]/40 to-transparent lg:block" />
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.n} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-brass-400)]/50 bg-[var(--color-forest-950)] font-display text-lg text-[var(--color-brass-300)]">
                {step.n}
              </span>
              <h3 className="mt-6 font-display text-xl text-[var(--color-parchment-50)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-parchment-200)]/70">
                {step.copy}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
