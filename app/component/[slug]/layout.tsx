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
import Layout from "@/core/layouts/component"
import { allComponents, Component } from "content"
import { format, parseISO } from "date-fns"

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    slug: component.url_path,
  }))
}

export default function ComponentLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const { slug } = params

  const component = allComponents.find(
    (component) => component.url_path === "/component/" + slug
  )

  if (!component) {
    notFound()
  }

  const {
    title,
    url_path,
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

  // console.log(component)

  return (
    <Layout>
      <article>
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
        {children}
      </article>
      <Taber component={url_path} />
    </Layout>
  )
}
