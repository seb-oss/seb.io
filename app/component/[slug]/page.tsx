"use client";
// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allComponents, Component } from "content";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Componentr() {
  const pathname = usePathname();

  const component = allComponents.find(
    (component) => component.url_path === pathname
  );

  if (!component) {
    notFound();
  }

  const {
    title,
    version,
    keywords,
    status,
    dependencies,
    date,
    global_id,
    last_edited,
  } = component;

  return (
    <article key={global_id}>
      <div>
        Published: <br />
        <time dateTime={date}>{format(parseISO(date), "LLLL d, yyyy")}</time>
        Last edited: <br />
        <time dateTime={last_edited}>
          {format(parseISO(last_edited), "LLLL d, yyyy")}
        </time>
        <h1>{title}</h1>
        <p>{version}</p>
        <p>{keywords}</p>
        <p>{status}</p>
        <p>{dependencies}</p>
      </div>
    </article>
  );
}
