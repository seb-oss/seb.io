import type { Metadata } from "next";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allComponents, Component } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Homer",
  description: "Home",
};

function Comp(component: Component) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        {/* <Link
          href={component.slug}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {component.title}
        </Link> */}
      </h2>
      <time
        dateTime={component.date}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(component.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: component.body.html }}
      />
    </div>
  );
}

// export default async function Home() {
export default function Home() {
  const components = allComponents.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="home">
      <section>
        <div>
          <h1>home</h1>
        </div>
      </section>
      <section>
        <h2>Blog</h2>
        <ul></ul>
        <Link href="/blog">Read all from blog</Link>
      </section>
      <section>
        <h2>Components</h2>
        <ul>
          <div>
            {/* {components.map((component, idx) => (
              <Comp key={idx} {...component} />
            ))} */}
          </div>
        </ul>
        <Link href="/components">All components</Link>
      </section>
      <section>
        <h2>Changelog</h2>
        <ul></ul>
        <Link href="/components">All changes</Link>
      </section>
      <section>
        <h2>Status</h2>
        <Link href="/about/status">Status</Link>
      </section>
    </main>
  );
}
