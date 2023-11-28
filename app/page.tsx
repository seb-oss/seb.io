import Link from "next/link"
import Hero from "@/core/blocks/hero/hero"
import { allComponents, Component } from "content"

function ComponentCard(component: Component) {
  return <Link href={component.url_path}>{component.title}</Link>
}

export default function Home() {
  const components = allComponents
    .filter((component) => component._raw.sourceFileName === "index.mdx")
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="layout core">
      <Hero />
      <section>
        <h2>Other pages</h2>
        <div>
          <Link href="/changelog">Changelog</Link>
          <Link href="/status">Status</Link>
          <Link href="/status">Status</Link>
        </div>
      </section>
      <section>
        <h2>
          <Link href="/components">Components</Link>
          <Link href="/components">All components</Link>
        </h2>
        <div>
          {components.map((component, idx) => (
            <ComponentCard key={idx} {...component} />
          ))}
        </div>
      </section>
    </div>
  )
}
