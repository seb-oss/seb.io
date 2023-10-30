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

export default function Components() {
  const components = allComponents.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="home">
      <section>
        <h2>Components</h2>
        {components.map((component, idx) => (
          <ComponentCard key={idx} {...component} />
        ))}
      </section>
    </div>
  );
}
