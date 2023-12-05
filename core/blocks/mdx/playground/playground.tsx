import './styles.css';

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
  return (
    <>
      <playground-project
        id="story-project"
        project-src="/stories/story-project.json"
      ></playground-project>
      <playground-preview project="story-project"> </playground-preview>
    </>
  )
}

  export default Playground