import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

function Figma() {
  return (
    <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNv3WN0vGhsCj1WSqlA1Ctn%2FEmbed%3Ftype%3Ddesign%26node-id%3D1%253A5%26mode%3Ddesign%26t%3DUgb7hOv2Uve2qzvr-1&hide_ui=1"></iframe>
  )
}

function Pen() {
  return (
    <iframe src="https://codepen.io/astrit/embed/RwvKavd?default-tab=html%2Cresult"></iframe>
  )
}

function CustomImage(props: any) {
  return <img alt={props.alt} {...props} />
}

function Sandbox() {
  return (
    <iframe src="https://codesandbox.io/embed/silent-water-pd45yy?fontsize=14&hidenavigation=1&theme=dark"></iframe>
  )
}

const components = { Figma, Pen, Image: CustomImage, Sandbox }

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <main>
      <Component components={components} />
    </main>
  )
}