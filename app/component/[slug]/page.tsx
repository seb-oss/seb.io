// app/posts/[slug]/page.tsx
import Link from "next/link"
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation"
import { Mdx } from "@/core/blocks/mdx"
import Sidebar from "@/core/blocks/sidebar"
import Taber from "@/core/blocks/taber"
import TOC from "@/core/blocks/toc/toc"
import Trail from "@/core/blocks/trail/trail"
import { allComponents, Component } from "content"
import { format, parseISO } from "date-fns"

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    slug: component.url_path,
  }))
}
export default function Componentr({ params }: { params: { slug: string } }) {
  const { slug } = params
  // console.log("component/" + slug);
  // const pathname = usePathname();

  const component = allComponents.find(
    (component) => component.url_path === "/component/" + slug
  )

  // console.log(component);
  if (!component) {
    notFound()
  }

  const {
    title,
    version,
    keywords,
    status,
    dependencies,
    date,
    global_id,
    last_edited,
    summary,
    body,
  } = component

  return (
    <>
      <article key={global_id}>
        <header>
          <Trail
            home={"Home"}
            separator={<span> / </span>}
            activeClass="active"
          />
          <div className="content">
            <h1>{title}</h1>
            <p>{summary}</p>
          </div>
          <div className="details">
            <time dateTime={last_edited} title="Last updated">
              {format(parseISO(last_edited), "LLL d, yyyy")}
            </time>
            <div title="Version">{version}</div>
            <div title="Status">{status}</div>
          </div>
          <div className="details">
            <div title="Keywords">{keywords}</div>
          </div>
          <div className="details">
            <div title="Dependecies">{dependencies}</div>
          </div>
        </header>
        <Mdx code={body.code} />

        <Taber />
      </article>
      {component.headings && (
        <aside className="toc">
          <span>On this page</span>
          <nav>
            <TOC headings={component.headings} />
          </nav>
        </aside>
      )}
    </>
  )
}
