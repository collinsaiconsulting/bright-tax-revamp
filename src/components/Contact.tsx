import ScrollReveal from "./ui/ScrollReveal";
import { AnimatedButton } from "./ui/AnimatedButton";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-forest-900)] px-6 py-28 lg:px-10">
      <div
        className="pointer-events-none absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(201,154,68,0.4), transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brass-300)]">
            Let's work together
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-[var(--color-parchment-50)] sm:text-5xl">
            Ready for a tax plan that works as hard as you do?
          </h2>
          <p className="mt-6 max-w-md text-[var(--color-parchment-200)]/75">
            Reach out for a consultation — we respond within one business day,
            in English, Haitian Creole, or Spanish.
          </p>

          <dl className="mt-10 space-y-4 text-[var(--color-parchment-200)]/85">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-[var(--color-brass-300)]">Phone</dt>
              <dd>954-283-9555</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-[var(--color-brass-300)]">Fax</dt>
              <dd>888-982-8297</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-[var(--color-brass-300)]">Email</dt>
              <dd>info@brighttaxfl.com</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-[var(--color-brass-300)]">Address</dt>
              <dd>1930 Harrison Street, Suite #202, Hollywood, FL 33020</dd>
            </div>
          </dl>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
          >
            {["Full name", "Email address", "Phone number"].map((label) => (
              <div key={label}>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-parchment-200)]/70">
                  {label}
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-parchment-50)] outline-none transition-colors placeholder:text-[var(--color-parchment-200)]/30 focus:border-[var(--color-brass-400)]/60"
                  placeholder={label}
                />
              </div>
            ))}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-parchment-200)]/70">
                How can we help?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-parchment-50)] outline-none transition-colors placeholder:text-[var(--color-parchment-200)]/30 focus:border-[var(--color-brass-400)]/60"
                placeholder="Tell us about your business or tax question"
              />
            </div>
            <AnimatedButton
              type="submit"
              variant="primary"
              className="w-full !bg-[var(--color-brass-500)] !text-[var(--color-forest-950)] !shadow-[0_10px_30px_-10px_rgba(201,154,68,0.55)]"
            >
              Send Message
            </AnimatedButton>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
