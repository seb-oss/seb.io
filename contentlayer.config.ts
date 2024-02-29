import { makeSource } from "@contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import highlight from "rehype-highlight"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { rehypePrettyCodeOptions } from "./utils/theme/code"
import * as documentTypes from "./utils/content/types"
import { contentDirPath } from "./utils/content/utils"
import React from "react"



export default makeSource({
  contentDirPath,
  documentTypes,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        rehypePrettyCodeOptions,
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        
        },
      ],
      
    ],
  },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData()
  },
})
