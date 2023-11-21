"use client"

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
        {tocComponent}
      </article>
    </Layout>
  )
}
