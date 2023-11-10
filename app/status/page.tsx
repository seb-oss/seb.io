// app/posts/[slug]/page.tsx
import { allComponents } from "content"
import { format, parseISO } from "date-fns"

import "./style.css"

export default function Status() {
  return (
    <article className="status">
      <div>
        <div>Component</div>
        <div>Version</div>
        <div>Dependencies</div>
        <div>Status</div>
      </div>
      {allComponents.map((component) => (
        <div>
          <time dateTime={component.date}>
            {format(parseISO(component.date), "LLLL d, yyyy")}
          </time>
          <div title="Component">{component.title}</div>
          <div title="Version">{component.version}</div>
          <div title="Dependencies">{component.dependencies}</div>
          <div title="Status">{component.status}</div>
        </div>
      ))}
    </article>
  )
}
