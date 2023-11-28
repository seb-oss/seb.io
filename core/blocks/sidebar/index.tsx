import Link from "next/link"
import { usePathname } from "next/navigation"
import { allComponents, Component } from "content"

import "./style.css"

export default function Sidebar({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean
  toggleNav: () => void
}) {
  const path = usePathname()
  const filteredComponents = allComponents.filter(
    (component) => component._raw.sourceFileName === "index.mdx"
  )
  function Component(component: Component) {
    return (
      <Link
        className={path == component.url_path ? "active" : ""}
        href={component.url_path}
      >
        {component.title}
      </Link>
    )
  }

  const components = filteredComponents.sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  return (
    <aside className={`nav ${!isNavOpen ? "hidden" : ""}`}>
      <details open>
        <summary>
          <Link
            className={path == "/components" ? "active" : ""}
            href="/components"
          >
            Components
          </Link>
          <span>
            <svg viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </summary>
        <nav>
          {components.map((component, idx) => (
            <Component key={idx} {...component} />
          ))}
        </nav>
      </details>
      <details>
        <summary>
          <Link
            className={path == "/foundation" ? "active" : ""}
            href="/foundation"
          >
            Foundation
          </Link>
          <span>
            <svg viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </summary>
        <nav>
          <Link
            className={path == "/foundation/accessibility" ? "active" : ""}
            href="/foundation/accessibility"
          >
            Accessibility
          </Link>
          <Link
            className={path == "/foundation/direction" ? "active" : ""}
            href="/foundation/direction"
          >
            Direction
          </Link>
        </nav>
      </details>
      <details>
        <summary>
          <Link className={path == "/about" ? "active" : ""} href="/about">
            About
          </Link>
          <span>
            <svg viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </summary>
        <nav>
          <Link
            className={path == "/changelog" ? "active" : ""}
            href="/changelog"
          >
            Changelog
          </Link>
          <Link className={path == "/status" ? "active" : ""} href="/status">
            Status
          </Link>
        </nav>
      </details>
    </aside>
  )
}
