// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allChangelogs } from "content";

export const generateStaticParams = async () =>
  allChangelogs.map((changelog) => ({ slug: changelog.url_path }));

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const changelog = allChangelogs.find((changelog) => changelog.url_path);
  if (!changelog) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article>
      <div>
        <time dateTime={changelog.date}>
          {format(parseISO(changelog.date), "LLLL d, yyyy")}
        </time>
        <h1>{changelog.title}</h1>
      </div>
    </article>
  );
};

export default PostLayout;
