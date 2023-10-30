// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "content";
import Comments from "@/core/blocks/giscus";
import "./style.css";
import Link from "next/link";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url_path,
  }));
}
export default function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = allPosts.find((post) => post.url_path === "/blog/" + slug);

  if (!post) {
    notFound();
  }

  console.log(post.url_path);
  console.log(post.author);
  return (
    <article className="post">
      <header>
        <div className="content">
          <h1>{post.title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="post-details">
          <Link
            href={"/about/team/" + post.author}
            className="author"
            title="Author"
          >
            <img
              src={"https://github.com/" + post.author + ".png"}
              alt={post.author}
            />
            <div className="author-details">
              <div className="name">Astrit</div>
              <div className="title">Design Engineer</div>
            </div>
          </Link>
          <time dateTime={post.date} title="Published on">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <div>
              {format(parseISO(post.date), "LLL d, yyyy")}
              <span>Published on</span>
            </div>
          </time>
          <div className="comments">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="count">
              120
              <span>Comments</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>Post content</div>
        <aside>
          <h3>In this page</h3>
          <ul>
            <li>Intro</li>
            <li>How to add </li>
            <li>This and that</li>
          </ul>
        </aside>
      </main>
      <footer>
        <Comments />
      </footer>
    </article>
  );
}
