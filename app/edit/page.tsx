import Layout from "@/core/layouts/core"
import { Editor } from "novel"

import "./style.css"

export default function Edit() {
  return (
    <div className="editor">
      <Editor className="content" defaultValue="This is some content" />
    </div>
  )
}
