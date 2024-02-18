import Grid from "@/core/blocks/grid-example/grid"
import Content from "@/core/layouts/content/content"

export default function GridPage() {
  return (
    <Content layout="content">
      <div className="grid-test">
        <Grid />
      </div>
    </Content>
  )
}
