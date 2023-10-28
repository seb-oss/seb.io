// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "content";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.url_path }));

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.url_path);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article>
      <div>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
    </article>
  );
};

export default PostLayout;
