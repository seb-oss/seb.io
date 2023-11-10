import Link from "next/link"
import { allComponents, Component } from "content"

function ComponentCard(component: Component) {
  return <Link href={component.url_path}>{component.title}</Link>
}

export default function Components() {
  const filteredComponents = allComponents.filter(
    (component) => component._raw.sourceFileName === "index.mdx"
  )

  const components = filteredComponents.sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  return (
    <div className="layout core">
      <section>
        <h2>Components</h2>
        <div>
          {components.map((component, idx) => (
            <ComponentCard key={idx} {...component} />
          ))}
        </div>
      </section>
    </div>
  )
}
