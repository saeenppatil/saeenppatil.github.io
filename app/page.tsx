import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Education } from "@/components/portfolio/education"
import { Research } from "@/components/portfolio/research"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Footer } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main className="min-h-svh">
      <Nav />
      <Hero />
      <Education />
      <Research />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}
