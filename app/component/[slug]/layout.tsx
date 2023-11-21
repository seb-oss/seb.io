"use client"

import Link from "next/link"
import { notFound, usePathname, useRouter } from "next/navigation"
import Taber from "@/core/blocks/taber"
import TOC from "@/core/blocks/toc/toc"
import Trail from "@/core/blocks/trail/trail"
import Layout from "@/core/layouts/component"
import { allComponents } from "content"
import { format, parseISO } from "date-fns"

export default function ComponentLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const { slug } = params
  const pathName = usePathname()

  const getComponent = (path: string) =>
    allComponents.find(
      (component) => component.url_path === `/component/${slug}${path}`
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
    tags,
    status,
    date,
    global_id,
    last_edited,
    summary,
    body,
  } = component

  const pathsAndComponents = [
    { path: "/accessibility", component: componentA11y },
    { path: "/code", component: componentCode },
    { path: "/design", component: componentDesign },
    { path: "/guidelines", component: componentGuidelines },
  ]

  let tocComponent = <TOC headings={component?.headings} /> // default TOC component

  for (let { path, component } of pathsAndComponents) {
    if (pathName.includes(path)) {
      tocComponent = <TOC headings={component?.headings} />
      break
    }
  }

  const tagsArray = tags ? tags.split(", ") : []

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
          <div title="Status">
            <div className="status">{status}</div>
          </div>
          <div title="Tags">
            {/* {tags} */}
            <menu>
              {tagsArray.map((tag, index) => (
                // This should be a link potentially to a search page
                // <div key={tag} href={`/tags/${tag}`}>
                <div key={tag}>{tag}</div>
              ))}
            </menu>
          </div>
        </div>
      </header>
      <article>
        <div className="content">
          {children}
          <Taber component={url_path} />
        </div>

        {tocComponent}
      </article>
      <br />
      <br />
      <br />
      <br />
      Last updated:
      <time dateTime={last_edited} title="Last updated">
        {format(parseISO(last_edited), "d LLL, yyyy '/' HH:mm")}
      </time>
    </Layout>
  )
}
