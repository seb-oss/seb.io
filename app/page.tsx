import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allComponents, Component } from "contentlayer/generated";

import Image from "next/image";
import Button from "@/components/button";

function ComponentCard(component: Component) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={component.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {component.title}
        </Link>
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

export default function Home() {
  const components = allComponents.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main>
      <Button />
      {components.map((component, idx) => (
        <ComponentCard key={idx} {...component} />
      ))}
    </main>
  );
}
