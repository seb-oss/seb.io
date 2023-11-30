import Link from "next/link"
import Hero from "@/core/blocks/hero/hero"
import Pattern from "@/core/blocks/pattern/pattern"
import { allComponents, Component } from "content"

function ComponentCard(component: Component) {
  return (
    <Link href={component.url_path}>
      <Pattern>
        <button>Button</button>
      </Pattern>
      <span>{component.title}</span>
      <p>{component.summary}</p>
    </Link>
  )
}

export default function Home() {
  const components = allComponents
    .filter((component) => component._raw.sourceFileName === "index.mdx")
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="layout core">
      <Hero />
      {/* <section>
        <h2>Other pages</h2>
        <div>
          <Link href="/changelog">Changelog</Link>
          <Link href="/status">Status</Link>
          <Link href="/status">Status</Link>
        </div>
      </section> */}
      <section>
        <h2>
          <Link href="/components">Components</Link>
          <Link href="/components">All components</Link>
        </h2>
        <div className="component-list">
          {components.map((component, idx) => (
            <ComponentCard key={idx} {...component} />
          ))}
        </div>
      </section>
      <section>
        <h2>Resources</h2>
        <div>
          <Link href="/">A good link for a developer</Link>
          <Link href="/">SEB Brand Hub</Link>
          <Link href="/">Get access to Figma</Link>
        </div>
      </section>
      <section>
        <h2>Empowering designers and developers</h2>
        <div>
          A framework with accessibility and usability rooted at its core, Green
          Design System empowers designers and developers to create with speed
          and precision. It ensures a seamless and consistent visual experience
          across our entire product suite.
        </div>
      </section>
    </div>
  )
}
