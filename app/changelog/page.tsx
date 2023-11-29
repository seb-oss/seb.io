import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import {
  allChangelogs,
  Changelog,
} from "content";
import Layout from "@/core/layouts/changelog";

function ChangelogCard(changelog: Changelog) {
  return (
    <article id={changelog.version} className="log">
      <aside>
        <span>{changelog.version}</span>
        <time dateTime={changelog.date}>
          {format(parseISO(changelog.date), "LLLL d, yyyy")}
        </time>
      </aside>
      <main>
        <h2>
          <Link href={changelog.url_path}>
            {changelog.title}
          </Link>
        </h2>
        <p>{changelog.summary}</p>
        <h3>Bug fixes</h3>
        <ul>
          <li>Hello</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item <code>test</code></li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </main>
    </article>
  );
}

export default function Changelog() {
  const changelogs = allChangelogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Layout  >
      <h1>Changelogs</h1>
      <section>
        {changelogs.map((changelog, idx) => (
          <ChangelogCard key={idx} {...changelog} />
        ))}
      </section>
    </Layout>
  );
}
