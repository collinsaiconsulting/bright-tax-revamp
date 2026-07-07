import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const QUOTE =
  "Bright Tax revolutionized how we handle our restaurant's finances using smart, multilingual guidance. We are now securing better refunds quicker than we ever imagined — and tax season finally stopped being something we dread every single year.";

const MORE_REVIEWS = [
  { quote: "They explain everything in plain language — in Creole, which meant the world to my mother.", name: "J. Registre", role: "Small Business Owner" },
  { quote: "Our practice's entity structure finally makes sense. Filing season stopped being stressful.", name: "Dr. R. Fontaine", role: "Medical Practice" },
  { quote: "Responsive, precise, and genuinely invested in our nonprofit's mission.", name: "S. Bertrand", role: "Non-Profit Director" },
];

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, [
    "hsl(0 0% 78%)",
    "hsl(0 0% 8%)",
  ]);
  return (
    <motion.span style={{ opacity, color }} className="mr-[0.3em]">
      {children}
    </motion.span>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const words = QUOTE.split(" ");

  return (
    <section
      id="testimonials"
      className="flex min-h-screen items-center bg-background px-8 py-24 md:px-28 md:py-32"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div ref={containerRef} className="flex flex-col items-start gap-10">
          <span
            aria-hidden="true"
            className="font-serif text-7xl leading-none text-accent"
          >
            &ldquo;
          </span>

          <p className="flex flex-wrap text-4xl font-medium leading-[1.2] md:text-5xl">
            {words.map((word, i) => (
              <Word
                key={`${word}-${i}`}
                progress={scrollYProgress}
                range={[i / words.length, (i + 1) / words.length]}
              >
                {word}
              </Word>
            ))}
            <span className="ml-2 text-muted-foreground">&rdquo;</span>
          </p>

          <div className="flex items-center gap-4">
            <img
              src="/testimonial-avatar.svg"
              alt="Portrait of M. Alexandre"
              className="h-14 w-14 rounded-full border-[3px] border-foreground object-cover"
            />
            <div>
              <p className="text-base font-semibold leading-7 text-foreground">
                M. Alexandre
              </p>
              <p className="text-sm font-normal leading-5 text-muted-foreground">
                Restaurant Owner
              </p>
            </div>
          </div>
        </div>

        {/* Remaining client stories */}
        <div className="mt-24 grid gap-6 sm:grid-cols-3">
          {MORE_REVIEWS.map((r, i) => (
            <ScrollReveal
              key={r.name}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-serif text-lg italic leading-relaxed text-foreground/90">
                “{r.quote}”
              </p>
              <footer className="mt-5 text-sm">
                <span className="font-semibold text-foreground">{r.name}</span>
                <span className="text-muted-foreground"> — {r.role}</span>
              </footer>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
