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
      <div className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        <span ref={ref}>{current}</span>
        {suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default function TrustStats() {
  return (
    <section className="relative z-10 bg-background px-8 py-16 md:px-28">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 rounded-3xl border border-border bg-card px-8 py-10 sm:grid-cols-4">
        {STATS.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
