// app/posts/[slug]/page.tsx
import { allComponents } from "content"
import { format, parseISO } from "date-fns"

export default function Status() {
  return (
    <article>
      {allComponents.map((component) => (
        <div>
          <time dateTime={component.date}>
            {format(parseISO(component.date), "LLLL d, yyyy")}
          </time>
          <h1>{component.title}</h1>
          <p>{component.version}</p>
          <p>{component.keywords}</p>
          <div>{component.status}</div>
        </div>
      ))}
    </article>
  )
}
