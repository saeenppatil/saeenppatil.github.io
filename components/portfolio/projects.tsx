import { SectionHeading } from "@/components/portfolio/section-heading"
import { projects } from "@/lib/portfolio-data"
import { assetPath } from "@/lib/site-path"

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 border-t border-border px-6 py-16 md:py-20"
    >
      <SectionHeading title="Personal Projects" />

      <ul className="project-grid mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.title}
            className={`overflow-hidden rounded-xl border border-border bg-card ${
              index === projects.length - 1 && projects.length % 2 === 1
                ? "sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:justify-self-center"
                : ""
            }`}
          >
            {project.preview ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block border-b border-border bg-muted"
                aria-label={`Open ${project.title} on GitHub`}
              >
                <img
                  src={assetPath(project.preview)}
                  alt={`GitHub repository preview for ${project.title}`}
                  className="aspect-[2/1] w-full bg-white object-contain"
                  loading="lazy"
                />
              </a>
            ) : null}

            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold leading-7 tracking-tight text-foreground">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-primary/20 underline-offset-4 hover:text-primary hover:decoration-primary"
                  >
                    {project.title} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.blurb}</p>
              <p className="mt-4 border-t border-border pt-4 text-xs leading-6 text-foreground/75">
                {project.tags.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
