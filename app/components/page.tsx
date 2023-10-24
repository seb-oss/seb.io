import { forwardRef } from "react";
import { compareDesc, format, parseISO } from "date-fns";
import { allComponents, Component } from "contentlayer/generated";
import Link from "next/link";
import Aside from "@/components/nav/nav";
import "../../style/components.css";

function Card(component: Component) {
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

export const Components = forwardRef(({ ...props }, ref) => {
  const components = allComponents.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>Components</h1>
        </div>
        <div>
          {components.map((component, idx) => (
            <Card key={idx} {...component} />
          ))}
        </div>
      </section>
    </main>
  );
});

Components.displayName = "Components";

export default Components;
