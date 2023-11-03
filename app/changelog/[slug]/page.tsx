import Link from "next/link"
import { notFound } from "next/navigation"
import { allChangelogs } from "content"
import { format, parseISO } from "date-fns"

export async function generateStaticParams() {
  return allChangelogs.map((changelog) => ({
    slug: changelog.url_path,
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
// ;<article>
//   <article className="post">
//     <header>
//       <div className="content">
//         <h1>{title}</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>
//       <div className="post-details">
//         <time dateTime={date} title="Published on">
//           <svg width="24" height="24" viewBox="0 0 24 24">
//             <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//             <line x1="16" y1="2" x2="16" y2="6"></line>
//             <line x1="8" y1="2" x2="8" y2="6"></line>
//             <line x1="3" y1="10" x2="21" y2="10"></line>
//           </svg>
//           <div>
//             {format(parseISO(date), "LLL d, yyyy")}
//             <span>Published on</span>
//           </div>
//         </time>
//       </div>
//     </header>
//     <main>
//       <div>Post content</div>
//     </main>
//   </article>
// </article>
