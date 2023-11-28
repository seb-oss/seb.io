import { notFound } from "next/navigation"
import { Mdx } from "@/core/blocks/mdx"
import { allComponents } from "content"

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    slug: component.url_path.replace("/component/", ""),
  }))
}

export default function Code({ params }: { params: { slug: string } }) {
  const { slug } = params

  const component = allComponents.find(
    (component) => component.url_path === "/component/" + slug + "/ux-text"
  )

  if (!component) {
    notFound()
  }

  const { body } = component

  return <Mdx code={body.code} globals={{}} />
}
