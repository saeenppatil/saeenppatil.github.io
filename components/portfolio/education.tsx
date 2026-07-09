import { SectionHeading } from "@/components/portfolio/section-heading"
import { education } from "@/lib/portfolio-data"

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-border px-6 py-16 md:py-20"
    >
      <SectionHeading title="Education" />

      <div className="divide-y divide-border border-y border-border">
        {education.map((item) => (
          <article
            key={item.school}
            className="grid gap-3 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-10"
          >
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{item.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
            </div>
            <div className="sm:text-right">
              <p className="text-sm font-medium text-foreground">{item.period}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
