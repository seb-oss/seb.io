import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import {
  allChangelogs,
  Changelog,
} from "content";
import Layout from "@/core/layouts/changelog";
import { Mdx } from "@/core/blocks/mdx";

function ChangelogCard(changelog: Changelog) {

  // console.log(changelog)
  return (
    <article id={changelog.version} className="log">
      <aside>
        <span>{changelog.version}</span>
        <time dateTime={changelog.date}>
          {format(parseISO(changelog.date), "LL.d.yy")}
        </time>
      </aside>
      <main>
        <h2>
          <Link href={changelog.url_path}>
            {changelog.title}
          </Link>
        </h2>
                <Mdx code={changelog.body.code} globals={{ url_path: changelog.url_path }} />
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
          <ChangelogCard key={idx}  {...changelog} />
        ))}
      </section>
    </Layout>
  );
}