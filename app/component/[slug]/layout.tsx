"use client"

import { use } from "react"
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

// export async function generateStaticParams() {
//   return allComponents.map((component) => ({
//     slug: component.url_path,
//   }))
// }

// export async function generateStaticParams() {
//   return allComponents.map((component) => ({
//     slug: component.url_path.replace('/component/', ''),
//   }));
// }

export default function ComponentLayout({
  children,
  params,
}: // headings,
{
  children: React.ReactNode
  params: { slug: string }
  // headings: any
}) {
  const router = useRouter()
  const { slug } = params
  const pathName = usePathname()

  const getComponent = (path: string) =>
    allComponents.find(
      (component) => component.url_path === "/component/" + slug + path
    )

  const component = getComponent("")
  const componentA11y = getComponent("/accessibility")
  const componentCode = getComponent("/code")
  const componentDesign = getComponent("/design")
  const componentGuidelines = getComponent("/guidelines")

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

  return (
    <Layout key={global_id}>
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
      </header>
      <article>
        <div className="content">
          {children}
          <Taber component={url_path} />
        </div>
        {pathName.includes("/accessibility") && (
          <TOC headings={componentA11y?.headings} />
        )}
        {pathName.includes("/code") && (
          <TOC headings={componentCode?.headings} />
        )}
        {pathName.includes("/design") && (
          <TOC headings={componentDesign?.headings} />
        )}
        {pathName.includes("/guidelines") && (
          <TOC headings={componentGuidelines?.headings} />
        )}
      </article>
    </Layout>
  )
}
