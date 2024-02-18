"use client"

import ComponentCard from "@/core/blocks/component-card/component-card"
import Grid from "@/core/blocks/grid/grid"
import { allComponents } from "content"

import "./component-list.css"

export default function ComponentList({ title }: { title: string }) {
  const components = allComponents
    .filter((component) => component._raw.sourceFileName === "index.mdx")
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <section className="component-list">
      {title && <h2>{title}</h2>}
      <Grid columns={3} gapH="medium" gapV="medium">
        {components.map((component, idx) => (
          <ComponentCard key={idx} {...component} />
        ))}
      </Grid>
    </section>
  )
}
