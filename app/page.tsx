import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import {
  allPosts,
  Post,
  allComponents,
  Component,
  allChangelogs,
  Changelog,
} from "content";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url_path}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

function ComponentCard(component: Component) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={component.url_path}
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
    </div>
  );
}

function ChangelogCard(changelog: Changelog) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={changelog.url_path}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {changelog.title}
        </Link>
      </h2>
      <time
        dateTime={changelog.date}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(changelog.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const components = allComponents.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const changelogs = allChangelogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      hello
      <h1>Blog</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      <h2>Components</h2>
      {components.map((component, idx) => (
        <ComponentCard key={idx} {...component} />
      ))}
      <h2>Changelogs</h2>
      {changelogs.map((changelog, idx) => (
        <ChangelogCard key={idx} {...changelog} />
      ))}
    </div>
  );
}
