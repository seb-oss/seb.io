// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allComponents } from "content";

export const generateStaticParams = async () =>
  allComponents.map((component) => ({ slug: component.url_path }));

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find((component) => component.url_path);
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);

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
};

export default PostLayout;
