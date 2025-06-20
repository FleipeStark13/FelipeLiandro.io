import { Hero } from "components/hero"
import { WhoIs } from "components/who_is"
import { Languages } from "components/languages"
import { Projects } from "components/projects"
import { Contact } from "components/contact"
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
