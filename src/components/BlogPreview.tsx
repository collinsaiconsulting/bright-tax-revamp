import ScrollReveal from "./ui/ScrollReveal";

const POSTS = [
  { tag: "Planning", title: "Quarterly Estimated Taxes: What Entrepreneurs Miss", date: "Mar 2026" },
  { tag: "Compliance", title: "990 Filing Deadlines Every Non-Profit Should Know", date: "Feb 2026" },
  { tag: "Strategy", title: "S-Corp vs. LLC: Choosing the Right Structure in 2026", date: "Jan 2026" },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-background px-8 py-28 md:px-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              From the blog
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-1px] text-foreground sm:text-5xl">
              Tax insight, in{" "}
              <span className="font-serif font-normal italic text-accent">plain</span>{" "}
              English.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {POSTS.map((post, i) => (
            <ScrollReveal
              key={post.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/40"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {post.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-foreground/80">
                {post.title}
              </h3>
              <p className="mt-6 text-sm text-muted-foreground">{post.date}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
