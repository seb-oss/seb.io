import Link from "next/link"
import Hero from "@/core/blocks/hero/hero"
import FigmaSVG from "@/core/blocks/mdx/figma/figmaSVG"
import Pattern from "@/core/blocks/pattern/pattern"
import { allComponents, Component } from "content"

function ComponentCard(component: Component) {
  return (
    <Link href={component.url_path}>
      <Pattern>
        <div
          dangerouslySetInnerHTML={{ __html: component.figma_hero_svg.svg }}
        />
      </Pattern>
      <div>{component.title}</div>
      <p>{component.summary}</p>
    </Link>
  )
}

function Chevron() {
  return (
    <div>
      <svg viewBox="0 0 24 24">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
  )
}

export default function Home() {
  const components = allComponents
    .filter((component) => component._raw.sourceFileName === "index.mdx")
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="layout core">
      <Hero
        heading="Design and build beautiful, usable products with Green Design System"
        preamble="Green Design System is the latest version of SEB’s open-source design system. Welcome to a new era of digital banking."
      />
      <section className="home-components">
        <h2>
          <Link href="/components">Components</Link>
        </h2>
        <div className="component-list">
          {components.map((component, idx) => (
            <ComponentCard key={idx} {...component} />
          ))}
        </div>
      </section>
      <section className="home-resources">
        <h2>Resources</h2>
        <div className="list">
          <Link
            className="cta-home"
            href="https://github.com/sebgroup/green"
            target="_blank"
          >
            <span data-caption="Github">Start contributing now!</span>
            <Chevron />
          </Link>
          <Link
            className="cta-home"
            href="https://sebgroup.com/sv/press/pressfoton"
            target="_blank"
          >
            <span data-caption="Media Bank & Brand Guidelines">
              SEB Brand Hub
            </span>
            <Chevron />
          </Link>
          <Link className="cta-home" href="/">
            <span data-caption="Designer">Get access to Figma</span>
            <Chevron />
          </Link>
        </div>
      </section>
      <section className="home-quote">
        <h2>Empowering designers and developers</h2>
        <p>
          A framework with accessibility and usability rooted at its core, Green
          Design System empowers designers and developers to create with speed
          and precision. It ensures a seamless and consistent visual experience
          across our entire product suite.
        </p>
      </section>
    </div>
  )
}
