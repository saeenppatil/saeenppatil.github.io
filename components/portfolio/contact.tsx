import { profile } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href={`mailto:${profile.email}`} className="classic-link">{profile.email}</a>
      </div>
    </footer>
  )
}
