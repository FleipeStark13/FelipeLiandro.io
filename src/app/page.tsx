import { Hero } from "app/components/hero"
import { WhoIs } from "app/components/who_is"
import { Languages } from "app/components/languages"
import { Projects } from "app/components/projects"
import { Contact } from "app/components/contact"
export default function Page() {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section id="about">
        <WhoIs />
      </section>

      <section id="_projects">
        <Languages />
      </section>

      <section id="skills">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  )
}
