import { notFound } from "next/navigation"
import { Mdx } from "@/core/blocks/mdx"
import TOC from "@/core/blocks/toc/toc"
import { allComponents } from "content"

export const dynamic = "force-static"

// export const generateStaticParams = (): any => {
//   return allComponents.map((component) => ({
//     slug: component.url_path,
//   }))
// }
export const generateStaticParams = (): any => {
  return allComponents.map((component) => ({
    slug: component.url_path.replace("/component/", ""),
  }))
}

// export const dynamicParams = false

// export default function Component({ params }: { params: { slug: string } }) {
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
      <Mdx code={body.code} />
      {component.headings && <TOC headings={component.headings} />}
    </>
  )
}
