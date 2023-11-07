import Link from "next/link"
import {
  allChangelogs,
  allComponents,
  allMembers,
  allPosts,
  Changelog,
  Component,
  Member,
  Post,
} from "content"
import { compareDesc, format, parseISO } from "date-fns"

import "./style.css"

// console.log(allComponents)

export default function Sidebar() {
  const filteredComponents = allComponents.filter(
    (component) => component._raw.sourceFileName === "index.mdx"
  )
  function Component(component: Component) {
    return <Link href={component.url_path}>{component.title}</Link>
  }

  const components = filteredComponents.sort((a, b) =>
    compareDesc(new Date(a.title), new Date(b.title))
  )

  return (
    <aside className="components">
      <span>Components</span>
      <nav>
        {components.map((component, idx) => (
          <Component key={idx} {...component} />
        ))}
      </nav>
    </aside>
  )
}
