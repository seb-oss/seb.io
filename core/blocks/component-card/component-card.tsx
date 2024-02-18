"use client"

import Card from "@/core/blocks/card/card"
import Pattern from "@/core/blocks/pattern/pattern"
import { Component } from "content"

import "@/core/blocks/component-card/component-card.css"

export default function ComponentCard(component: Component) {
  return (
    <Card href={component.url_path}>
      {component.preview?.trim() ?? "" ? (
        <Pattern height="240">
          <div
            dangerouslySetInnerHTML={{
              __html: component.preview ?? "",
            }}
          />
        </Pattern>
      ) : (
        <Pattern height="240">
          <div
            dangerouslySetInnerHTML={{ __html: component.figma_hero_svg.svg }}
          />
        </Pattern>
      )}
      <div className="gds-card-title">{component.title}</div>
      <p className="gds-card-excerpt">{component.summary}</p>
    </Card>
  )
}
