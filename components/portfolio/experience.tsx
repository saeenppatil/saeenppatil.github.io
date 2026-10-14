import { SectionHeading } from "@/components/portfolio/section-heading"
import { experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 border-t border-border px-6 py-16 md:py-20">
      <SectionHeading title="Experience" />

      <ol className="relative ml-2 border-l border-border md:ml-[190px]">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.role}-${role.period}`}
            className="relative pb-11 pl-7 last:pb-0 md:pl-10"
          >
            <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-background bg-primary" />
            <div className="md:absolute md:right-full md:top-0 md:w-[190px] md:pr-8 md:text-right">
              <p className="text-xs font-medium leading-5 text-muted-foreground">{role.period}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-primary">{role.company}</p>
              <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight text-foreground">{role.role}</h3>
              {role.advisor ? (
                <p className="mt-2 text-sm font-medium text-foreground">Advisor: {role.advisor}</p>
              ) : null}
              {role.project ? (
                <p className="mt-1 text-sm italic leading-6 text-muted-foreground">{role.project}</p>
              ) : null}
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{role.description}</p>
              <p className="mt-3 text-xs leading-6 text-foreground/75">
                {role.stack.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
