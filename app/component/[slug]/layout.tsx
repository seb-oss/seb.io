"use client"

import Link from "next/link"
import { notFound, usePathname, useRouter } from "next/navigation"
import FigmaSVG from "@/core/blocks/mdx/figma/figmaSVG"
import Pattern from "@/core/blocks/pattern/pattern"
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
  const componentUXText = getComponent("/ux-text")

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
    { path: "/ux-text", component: componentUXText },
  ]

  // default TOC component
  let tocComponent = <TOC headings={component?.headings} component={title} />

  for (let { path, component } of pathsAndComponents) {
    if (pathName.includes(path)) {
      tocComponent = <TOC headings={component?.headings} component={title} />
      break
    }
  }

  // const tagsArray = tags ? tags.split(", ") : []
  const MAX_VISIBLE_TAGS = 3
  const tagsArray = tags ? tags.split(", ") : []
  const extraTagsCount = Math.max(0, tagsArray.length - MAX_VISIBLE_TAGS)

  return (
    <Layout key={global_id}>
      <Trail home={"Home"} separator={<span> / </span>} activeClass="active" />
      <header>
        <div className="content">
          <div className="intro">
            <h1>{title}</h1>
            <p>{summary}</p>
          </div>
          <div className="details">
            <div title="Status">
              <div className="status">{status}</div>
            </div>
            <div title="Tags">
              <menu>
                {tagsArray.slice(0, MAX_VISIBLE_TAGS).map((tag, index) => (
                  <div key={tag}>{tag}</div>
                ))}
                {extraTagsCount > 0 && <div>···</div>}
              </menu>
            </div>
          </div>
        </div>
        <FigmaSVG node="1608-315" />
        {/* <Pattern>
          <button>Test</button>
        </Pattern> */}
      </header>
      <article>
        <div className="content">
          {children}
          <Taber component={url_path} />
        </div>
        {tocComponent}
      </article>
      <footer>
        Last updated: <br />
        <time dateTime={last_edited} title="Last updated">
          {format(parseISO(last_edited), "d LLL, yyyy '/' HH:mm")}
        </time>
      </footer>
    </Layout>
  )
}
