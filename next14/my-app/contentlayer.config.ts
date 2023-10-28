// TODO remove eslint-disable when fixed https://github.com/import-js/eslint-plugin-import/issues/1810
// eslint-disable-next-line import/no-unresolved
import { makeSource } from '@contentlayer/source-files'
import highlight from 'rehype-highlight'
import { contentDirPath } from './utils/content/utils'
// import { contentDirPath, validateDuplicateIds } from './utils/content/utils'
import * as documentTypes from './utils/content/types'

export default makeSource({
  contentDirPath,
  documentTypes,
  // mdx: { rehypePlugins: [highlight] },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData()
    // await validateDuplicateIds(allDocuments)
  },
})