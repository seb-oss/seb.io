import { defineDocumentType } from "@contentlayer/source-files"

import { getLastEditedDate, urlFromFilePath } from "../utils"

export type DocHeading = { level: 1 | 2 | 3; title: string }

export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `component/**/*.mdx`,
  contentType: "mdx",
  fields: {
    global_id: {
      type: "string",
      description:
        "Random ID to uniquely identify this doc, even after it moves",
      required: true,
    },
    title: { type: "string", required: true },
    summary: { type: "string", required: false },
    date: { type: "date", required: true },
    version: { type: "string", required: true },
    keywords: { type: "string", required: false },
    status: { type: "string", required: true },
    dependencies: { type: "string", required: false },
  },
  computedFields: {
    url_path: {
      type: "string",
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: (component) => {
        if (component._id.startsWith("component/index.mdx")) return "/component"
        return urlFromFilePath(component)
      },
    },
    // url_path_without_id: {
    //   type: "string",
    //   description:
    //     'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
    //   resolve: (post) =>
    //     urlFromFilePath(post).replace(new RegExp(`-${post.global_id}$`), ""),
    // },
    pathSegments: {
      type: "json",
      resolve: (post) =>
        urlFromFilePath(post)
          .split("/")
          // skip `/docs` prefix
          .slice(2)
          .map((dirName) => {
            const re = /^((\d+)-)?(.*)$/
            const [, , orderStr, pathName] = dirName.match(re) ?? []
            const order = orderStr ? parseInt(orderStr) : 0
            return { order, pathName }
          }),
    },

    last_edited: { type: "date", resolve: getLastEditedDate },
  },
  extensions: {},
}))
