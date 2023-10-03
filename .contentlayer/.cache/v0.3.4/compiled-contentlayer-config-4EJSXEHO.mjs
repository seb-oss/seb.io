// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true }
  },
  computedFields: {
    url: { type: "string", resolve: (component) => `/components/${component._raw.flattenedPath}` }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "content", documentTypes: [Component] });
export {
  Component,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4EJSXEHO.mjs.map
