import { use, useEffect, useRef } from "react"

import "./styles.css"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "playground-ide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
      "playground-project": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
      "playground-preview": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          project: string
        },
        HTMLElement
      >
      "playground-file-editor": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

function Playground(props: any) {
  const projectRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        project: string | HTMLDivElement
      },
      HTMLElement
    >
  >(null)

  useEffect(() => {
    if (previewRef.current && projectRef.current) {
      previewRef.current.project = projectRef.current
    }
  })

  return (
    <>
      <playground-project
        id="story-project"
        ref={projectRef}
        project-src={`/stories/${props.component}/project.json`}
      ></playground-project>
      <playground-preview ref={previewRef}></playground-preview>
    </>
  )
}

export default Playground
