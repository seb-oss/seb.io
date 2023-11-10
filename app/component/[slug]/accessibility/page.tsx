import { notFound } from "next/navigation"
import { Mdx } from "@/core/blocks/mdx"
import TOC from "@/core/blocks/toc/toc"
import { allComponents } from "content"

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    slug: component.url_path,
  }))
}

export default function Accessibility({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const component = allComponents.find(
    (component) =>
      component.url_path === "/component/" + slug + "/accessibility"
  )

  if (!component) {
    notFound()
  }

  const { body } = component

  return (
    <>
      <Mdx code={body.code} />
      {component.headings && <TOC headings={component.headings} />}
    </>
  )
}
