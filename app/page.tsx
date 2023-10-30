import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import {
  allPosts,
  Post,
  allComponents,
  Component,
  allChangelogs,
  Changelog,
  allMembers,
  Member,
} from "content";
import Hero from "@/core/blocks/hero/hero";

function PostCard(post: Post) {
  return (
    <Link href={post.url_path}>
      {post.title}
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </Link>
  );
}

function ComponentCard(component: Component) {
  return (
    <Link href={component.url_path}>
      {component.title}
      <time dateTime={component.date}>
        {format(parseISO(component.date), "LLLL d, yyyy")}
      </time>
    </Link>
  );
}

function ChangelogCard(changelog: Changelog) {
  return (
    <Link href={changelog.url_path}>
      {changelog.title}
      <time dateTime={changelog.date}>
        {format(parseISO(changelog.date), "LLLL d, yyyy")}
      </time>
    </Link>
  );
}
function MemberCard(member: Member) {
  return (
    <Link href={"about" + member.url_path}>
      <img src={"https://github.com/" + member.handle + ".png"} />
      {member.name} <span>@{member.handle}</span>
    </Link>
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

  const team = allMembers.sort((a, b) =>
    compareDesc(new Date(a.name), new Date(b.name))
  );
  return (
    <div className="home">
      <Hero />
      {/* og image  / hero design */}
      <nav>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/status">Status</Link>
        </li>
      </nav>
      <section>
        <h2>
          <Link href="/blog">Blog</Link>
        </h2>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </section>
      <section>
        <h2>
          <Link href="/components">Components</Link>
        </h2>
        {components.map((component, idx) => (
          <ComponentCard key={idx} {...component} />
        ))}
      </section>
      <section>
        <h2>
          <Link href="/changelog">Changelog</Link>
        </h2>
        {changelogs.map((changelog, idx) => (
          <ChangelogCard key={idx} {...changelog} />
        ))}
      </section>
      <section>
        <h2>
          <Link href="/about">About</Link>
        </h2>
        {team.map((member, idx) => (
          <MemberCard key={idx} {...member} />
        ))}
      </section>
    </div>
  );
}
