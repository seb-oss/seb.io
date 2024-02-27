"use client"

import { notFound, usePathname } from "next/navigation"
import Badge from "@/core/blocks/badge/badge"
import Cell from "@/core/blocks/grid/cell"
import Grid from "@/core/blocks/grid/grid"
import Pattern from "@/core/blocks/pattern/pattern"
import Spacer from "@/core/blocks/spacer/spacer"
import Taber from "@/core/blocks/taber"
import Tags from "@/core/blocks/tags-list/tags"
import TOC from "@/core/blocks/toc/toc"
import Trail from "@/core/blocks/trail/trail"
import Content from "@/core/layouts/content/content"
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
    global_id,
    last_edited,
    summary,
    figma_hero_svg,
    preview,
  } = component

  const pathsAndComponents = [
    { path: "/accessibility", component: componentA11y },
    { path: "/code", component: componentCode },
    { path: "/design", component: componentDesign },
    { path: "/ux-text", component: componentUXText },
  ]

  let tocComponent = <TOC headings={component?.headings} component={title} />

  for (let { path, component } of pathsAndComponents) {
    if (pathName.includes(path)) {
      tocComponent = <TOC headings={component?.headings} component={title} />
      break
    }
  }

  const tagsArray = tags ? tags.split(", ") : []

  return (
    <Content layout="component" key={global_id}>
      <Grid columns={1} paddingBlock="medium" paddingInline="medium">
        <Trail
          home={"Home"}
          separator={<span> / </span>}
          activeClass="active"
        />
        <Grid columns={6} tablet={2} mobile={1} gapBlock="medium">
          <gds-cell span="4" className="content">
            <Grid columns={1} gapBlock="small">
              <div>
                <h1>{title}</h1>
                <p>{summary}</p>
              </div>
              <Grid
                columns={2}
                contentInline="auto"
                gapInline="small"
                justify="start"
              >
                <Badge title="Status" label={status} />
                <Tags title="Tags" tags={tagsArray} max={3} />
              </Grid>
            </Grid>
          </gds-cell>
          <gds-cell span="2">
            <Pattern>
              {preview?.trim() ?? "" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${preview}`,
                  }}
                />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: figma_hero_svg.svg }} />
              )}
            </Pattern>
          </gds-cell>
        </Grid>
        <Taber component={url_path} />
        <Grid columns={12} gapInline="medium" paddingBlock="medium">
          <Cell span="10">
            {/* <Grid gapBlock="small" columns={1} className="content"> */}
            <Grid gapBlock="small" columns={1}>
              {children}
            </Grid>
          </Cell>
          <Cell span="2">{tocComponent}</Cell>
        </Grid>
        <footer>
          Last updated: <br />
          <time dateTime={last_edited} title="Last updated">
            {format(parseISO(last_edited), "d LLL, yyyy '/' HH:mm")}
          </time>
        </footer>
      </Grid>
    </Content>
  )
}
