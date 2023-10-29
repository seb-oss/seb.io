// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "content";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url_path,
  }));
}
export default function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = allPosts.find((post) => post.url_path === slug);

  if (!post) {
    notFound();
  }

  console.log(post.url_path);
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
