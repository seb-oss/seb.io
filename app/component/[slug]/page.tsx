"use client";
// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allComponents } from "content";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function component() {
  const pathname = usePathname();

  const component = allComponents.find(
    (component) => component.url_path === pathname
  );

  if (!component) {
    notFound();
  }

  // console.log(component);
  // console.log(component.url_path);
  return (
    <article key={component.global_id}>
      <div>
        Published: <br />
        <time dateTime={component.date}>
          {format(parseISO(component.date), "LLLL d, yyyy")}
        </time>
        Last edited: <br />
        <time dateTime={component.last_edited}>
          {format(parseISO(component.last_edited), "LLLL d, yyyy")}
        </time>
        <h1>{component.title}</h1>
        <p>{component.version}</p>
        <p>{component.keywords}</p>
        <p>{component.status}</p>
        <p>{component.dependencies}</p>
      </div>
    </article>
  );
}
