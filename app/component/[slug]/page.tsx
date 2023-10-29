// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allComponents } from "content";

export default function Changelog() {
  const component = allComponents.find((component) => component.url_path);
  if (!component) {
    notFound();
  }
  return (
    <article>
      <div>
        <time dateTime={component.date}>
          {format(parseISO(component.date), "LLLL d, yyyy")}
        </time>
        <h1>{component.title}</h1>
      </div>
    </article>
  );
}
