import { useCountUp } from "../hooks/useCountUp";

const STATS = [
  { value: 35, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
  { value: 3, suffix: "", label: "Languages spoken" },
  { value: 9, suffix: "", label: "Industries served" },
];

function Stat({ value, suffix, label }: (typeof STATS)[number]) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-medium text-[var(--color-forest-900)] sm:text-5xl">
        <span ref={ref}>{current}</span>
        {suffix}
      </div>
      <p className="mt-2 text-sm text-[var(--color-ink-500)]">{label}</p>
    </div>
  );
}

export default function TrustStats() {
  return (
    <section className="relative z-10 -mt-16 px-6 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 rounded-3xl border border-[var(--color-forest-700)]/10 bg-white/80 px-8 py-10 shadow-[0_30px_60px_-24px_rgba(12,31,24,0.25)] backdrop-blur-md sm:grid-cols-4">
        {STATS.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
