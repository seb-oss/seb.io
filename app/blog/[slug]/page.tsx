// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "content";

export default function Blog() {
  const post = allPosts.find((post) => post.url_path);
  if (!post) {
    notFound();
  }
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
}
