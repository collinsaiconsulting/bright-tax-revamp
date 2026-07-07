import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background px-8 py-28 md:px-28">
      <div
        className="pointer-events-none absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(38 95% 55% / 0.18), transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Let's work together
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-1px] text-foreground sm:text-5xl">
            Ready for a tax plan that works as{" "}
            <span className="font-serif font-normal italic text-accent">hard</span>{" "}
            as you do?
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Reach out for a consultation — we respond within one business day,
            in English, Haitian Creole, or Spanish.
          </p>

          <dl className="mt-10 space-y-4 text-foreground/85">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted-foreground">Phone</dt>
              <dd>954-283-9555</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted-foreground">Fax</dt>
              <dd>888-982-8297</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted-foreground">Email</dt>
              <dd>info@brighttaxfl.com</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted-foreground">Address</dt>
              <dd>1930 Harrison Street, Suite #202, Hollywood, FL 33020</dd>
            </div>
          </dl>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-2xl border border-border bg-card p-8"
          >
            {["Full name", "Email address", "Phone number"].map((label) => (
              <div key={label}>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {label}
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-foreground/60"
                  placeholder={label}
                />
              </div>
            ))}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                How can we help?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-foreground/60"
                placeholder="Tell us about your business or tax question"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-background"
            >
              Send Message
            </motion.button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
