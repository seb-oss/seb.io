import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import {
  allChangelogs,
  Changelog,
} from "content";

function ChangelogCard(changelog: Changelog) {
  return (
    <article id={changelog.version} className="log">
      <div>
        <span>{changelog.version}</span>
        <time dateTime={changelog.date}>
          {format(parseISO(changelog.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div>
        <Link href={changelog.url_path}>
          {changelog.title}
        </Link>
        <p>{changelog.summary}</p>
      </div>
    </article>
  );
}

export default function Changelog() {
  const changelogs = allChangelogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="layout changelog">
      <section>
        <h2>Changelogs</h2>
        {changelogs.map((changelog, idx) => (
          <ChangelogCard key={idx} {...changelog} />
        ))}
      </section>
    </div>
  );
}
