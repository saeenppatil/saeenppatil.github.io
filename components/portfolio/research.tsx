import { SectionHeading } from "@/components/portfolio/section-heading"
import { publications } from "@/lib/portfolio-data"

export function Research() {
  return (
    <section id="publications" className="mx-auto max-w-5xl scroll-mt-24 border-t border-border px-6 py-16 md:py-20">
      <SectionHeading title="Research & Publications" />

      <ul className="border-t border-border">
        {publications.map((pub) => (
          <li key={pub.title} className="border-b border-border py-8">
            <div className="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <div>{pub.venue}</div>
                {pub.award ? <div className="mt-2 text-primary normal-case tracking-normal">{pub.award}</div> : null}
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold leading-7 tracking-tight">{pub.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{pub.authors}</p>
                {pub.links ? (
                  <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-primary">
                    {pub.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="classic-link underline decoration-current/30 underline-offset-4 hover:decoration-current"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
