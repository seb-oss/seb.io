import { notFound } from "next/navigation"
import { Mdx } from "@/core/blocks/mdx"
import TOC from "@/core/blocks/toc/toc"
import { allComponents } from "content"
import Script from 'next/script'

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    slug: component.url_path,
  }))
}

export default function Component({ params }: { params: { slug: string } }) {
  const { slug } = params

  const component = allComponents.find(
    (component) => component.url_path === "/component/" + slug
  )

  if (!component) {
    notFound()
  }

  const { body } = component

  return (
    <>
      <Script src={"/playground-elements/playground-elements.mjs"} type="module"></Script>
      <Mdx code={body.code} globals={{slug}} />
      {component.headings && <TOC headings={component.headings} />}
    </>
  )
}
