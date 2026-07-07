import ScrollReveal from "./ui/ScrollReveal";

const POSTS = [
  { tag: "Planning", title: "Quarterly Estimated Taxes: What Entrepreneurs Miss", date: "Mar 2026" },
  { tag: "Compliance", title: "990 Filing Deadlines Every Non-Profit Should Know", date: "Feb 2026" },
  { tag: "Strategy", title: "S-Corp vs. LLC: Choosing the Right Structure in 2026", date: "Jan 2026" },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-[var(--color-parchment-50)] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-brass-500)]">
              From the blog
            </p>
            <h2 className="mt-4 font-display text-4xl font-light text-[var(--color-forest-900)] sm:text-5xl">
              Tax insight, in plain English.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {POSTS.map((post, i) => (
            <ScrollReveal
              key={post.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group cursor-pointer rounded-2xl border border-[var(--color-forest-700)]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(12,31,24,0.25)]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brass-500)]">
                {post.tag}
              </span>
              <h3 className="mt-4 font-display text-xl text-[var(--color-forest-900)] transition-colors group-hover:text-[var(--color-forest-700)]">
                {post.title}
              </h3>
              <p className="mt-6 text-sm text-[var(--color-ink-500)]">{post.date}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
