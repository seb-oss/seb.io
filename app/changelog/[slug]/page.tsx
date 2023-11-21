import Link from "next/link"
import { notFound } from "next/navigation"
import { allChangelogs } from "content"
import { format, parseISO } from "date-fns"

export const generateStaticParams = (): any => {
  return allChangelogs.map((changelog) => ({
    slug: changelog.url_path.replace("/changelog/", ""),
  }))
}

export default function Changelog({ params }: { params: { slug: string } }) {
  const { slug } = params

  const changelog = allChangelogs.find(
    (changelog) => changelog.url_path === "/changelog/" + slug
  )

  if (!changelog) {
    notFound()
  }

  const { date, title, global_id, last_edited } = changelog

  return (
    <div className="layout changelog">
      <section>
        <article id={changelog.version} className="log">
          <aside>
            <span>{changelog.version}</span>
            <time dateTime={changelog.date}>
              {format(parseISO(changelog.date), "LLLL d, yyyy")}
            </time>
          </aside>
          <main>
            <h2>{changelog.title}</h2>
            <p>{changelog.summary}</p>
            <h3>Bug fixes</h3>
            <ul>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>
                List item <code>test</code>
              </li>
              <li>List item</li>
              <li>List item</li>
            </ul>
          </main>
        </article>
      </section>
    </div>
  )
}
