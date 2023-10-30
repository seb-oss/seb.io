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

export default function Changelog() {
  const changelogs = allChangelogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="home">
      <section>
        <h2>Changelogs</h2>
        {changelogs.map((changelog, idx) => (
          <ChangelogCard key={idx} {...changelog} />
        ))}
      </section>
    </div>
  );
}
