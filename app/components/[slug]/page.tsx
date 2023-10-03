// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allComponents } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allComponents.map((component) => ({ slug: component._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find(
    (component) => component._raw.flattenedPath === params.slug
  );
  if (!component)
    throw new Error(`Component not found for slug: ${params.slug}`);
  return { title: component.title };
};

const ComponentLayout = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find(
    (component) => component._raw.flattenedPath === params.slug
  );
  if (!component)
    throw new Error(`Component not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={component.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(component.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{component.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: component.body.html }}
      />
    </article>
  );
};

export default ComponentLayout;
