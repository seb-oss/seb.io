import { notFound } from "next/navigation"
import Script from "next/script"
import { Mdx } from "@/core/blocks/mdx"
import { allComponents } from "content"

export const dynamic = "force-static"

export const generateStaticParams = (): any => {
  return allComponents.map((component) => ({
    slug: component.url_path.replace("/component/", ""),
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
      <Script
        src={"/playground-elements/playground-elements.mjs"}
        type="module"
        crossOrigin="anonymous"
      ></Script>
      <Mdx code={body.code} globals={{ slug }} />
    </>
  )
}
