// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allComponents } from "content";

export default function status() {
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
  );
}
