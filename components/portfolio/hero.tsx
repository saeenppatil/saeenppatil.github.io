import Image from "next/image"
import { profile } from "@/lib/portfolio-data"
import { assetPath } from "@/lib/site-path"

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.social.github },
  { label: "Resume", href: profile.social.resume },
  { label: "LinkedIn", href: profile.social.linkedin },
]

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[300px_minmax(0,1fr)] md:items-center md:gap-16 lg:grid-cols-[340px_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-[340px] md:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
            <Image
              src={assetPath("/portrait.jpg")}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 768px) 340px, 340px"
              className="scale-[1.38] object-cover object-[50%_28%]"
            />
          </div>
        </div>

        <div>
          <h1 className="max-w-2xl font-heading text-5xl font-semibold leading-none tracking-tight text-balance md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl whitespace-pre-line text-base font-medium leading-7 text-primary md:text-lg">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-pretty text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Research focus
            </h2>
            <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
              {profile.researchFocus.map((item) => (
                <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.65rem] before:h-1 before:w-1 before:rounded-full before:bg-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-y-2 text-sm font-medium text-primary">
            {links.map((link, index) => (
              <span key={link.label} className="flex items-center">
                {index > 0 ? <span className="mx-2 text-border" aria-hidden="true">|</span> : null}
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="classic-link underline decoration-current/30 underline-offset-4 hover:decoration-current"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
