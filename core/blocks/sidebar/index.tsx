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

export default function Sidebar() {
  function Component(component: Component) {
    return <Link href={component.url_path}>{component.title}</Link>
  }

  const components = allComponents.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
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
