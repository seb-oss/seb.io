// app/posts/[slug]/page.tsx
import "./style.css";
import Link from "next/link";

export default function Loading() {
  return (
    <article className="post loading">
      <header>
        <div className="content">
          <h1>Sample post</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="post-details">
          <Link href="#" className="author" title="Author">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
            <div className="author-details">
              <div className="name">Astrit</div>
              <div className="title">Design Engineer</div>
            </div>
          </Link>
          <time title="Published on">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <div>
              <div className="time">Dec 21, 2020</div>
              <span className="time-pub">Published on</span>
            </div>
          </time>
          <div className="comments">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="count">
              <div className="com-nr">120</div>
              <span className="com-title">Comments</span>
            </div>
          </div>
        </div>
      </header>
    </article>
  );
}
