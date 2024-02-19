import ComponentList from "@/core/blocks/component-list/component-list"
import Grid from "@/core/blocks/grid/grid"
import Content from "@/core/layouts/content/content"

export default function Components() {
  return (
    <Content layout="content">
      <Grid columns={1} paddingBlock="large" paddingInline="large">
        <ComponentList title="Components" />
      </Grid>
    </Content>
  )
}
