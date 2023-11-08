import Link from "next/link"
import { allComponents, Component } from "content"

import "./style.css"

export default function Sidebar({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean
  toggleNav: () => void
}) {
  const filteredComponents = allComponents.filter(
    (component) => component._raw.sourceFileName === "index.mdx"
  )
  function Component(component: Component) {
    return <Link href={component.url_path}>{component.title}</Link>
  }

  const components = filteredComponents.sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  return (
    <aside className={`nav ${!isNavOpen ? "hidden" : ""}`}>
      <section data-name="Components">
        <nav>
          {components.map((component, idx) => (
            <Component key={idx} {...component} />
          ))}
        </nav>
      </section>
      <section data-name="Foundation">
        <nav>
          <Link href="/foundation/accessibility">Accessibility</Link>
          <Link href="/foundation/direction">Direction</Link>
        </nav>
      </section>

      <section data-name="About">
        <nav>
          <Link href="/changelog">Changelog</Link>
          <Link href="/status">Status</Link>
        </nav>
      </section>
    </aside>
  )
}
