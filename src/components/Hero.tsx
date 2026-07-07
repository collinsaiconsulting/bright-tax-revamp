import { useRef } from "react";
import { useParallax } from "../hooks/useParallax";
import { AnimatedButton } from "./ui/AnimatedButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useParallax(sectionRef);

  return (
    <section
      id="home"
      ref={sectionRef as never}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[var(--color-forest-950)] pt-24"
    >
      {/* Generative abstract background — no stock photography needed */}
      <div className="pointer-events-none absolute inset-0">
        <div
          data-depth="0.35"
          className="blob-a absolute -left-40 -top-32 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(47,98,73,0.9), rgba(47,98,73,0) 70%)",
          }}
        />
        <div
          data-depth="0.5"
          className="blob-b absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(201,154,68,0.55), rgba(201,154,68,0) 70%)",
          }}
        />
        <div
          data-depth="0.2"
          className="blob-c absolute bottom-[-10rem] left-1/3 h-[34rem] w-[34rem] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(232,207,159,0.4), rgba(232,207,159,0) 70%)",
          }}
        />
        {/* fine grid for texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,246,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(250,246,238,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(12,31,24,0.95) 0%, rgba(12,31,24,0.2) 55%, rgba(12,31,24,0.6) 100%)",
          }}
        />
      </div>

      {/* floating accent shapes */}
      <div
        data-depth="0.7"
        className="float-slow pointer-events-none absolute right-[12%] top-[28%] hidden h-16 w-16 rotate-12 rounded-2xl border border-[var(--color-brass-400)]/40 bg-white/5 backdrop-blur-sm md:block"
      />
      <div
        data-depth="0.9"
        className="float-slow pointer-events-none absolute right-[22%] top-[55%] hidden h-10 w-10 rounded-full border border-[var(--color-brass-300)]/50 bg-white/5 backdrop-blur-sm md:block"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brass-300)]">
          Tax preparation &middot; planning &middot; representation
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.05] text-[var(--color-parchment-50)] sm:text-6xl lg:text-7xl">
          We secure legacies,
          <br />
          <span className="italic text-[var(--color-brass-300)]">one return at a time.</span>
        </h1>
        <p className="max-w-xl text-lg text-[var(--color-parchment-200)]/80">
          Bright Tax Solutions has guided entrepreneurs, medical practices, and
          growing businesses through 35+ years of tax season — with the same
          warmth of a family advisor and the precision of a seasoned firm.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <AnimatedButton href="#contact" variant="primary">
            Book a Consultation
          </AnimatedButton>
          <AnimatedButton href="#services" variant="outline">
            Explore Services
          </AnimatedButton>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 hidden justify-center pb-3 sm:flex">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--color-parchment-50)]/30 p-1">
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-brass-300)]" />
        </div>
      </div>
    </section>
  );
}
