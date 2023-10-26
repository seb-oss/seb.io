// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
    stage: { type: 'string', required: true },
    version: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (component) => `/components/${component._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Component] })