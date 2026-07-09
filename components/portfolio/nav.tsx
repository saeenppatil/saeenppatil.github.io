import { profile } from "@/lib/portfolio-data"

const links = [
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="font-heading text-lg font-semibold tracking-tight text-foreground">
          {profile.name}
        </a>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
