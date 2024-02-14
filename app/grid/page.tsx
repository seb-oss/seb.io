import Grid from "@/core/blocks/grid/grid"

export default function GridPage() {
  return (
    <div style={{ flexDirection: "column" }}>
      <Grid />

      <br />
      <div className="app">
        <div className="app-alert">alert</div>
        <div className="app-header">header</div>
        <div className="app-layout">
          <div className="sidebar">sidebar</div>
          <div className="content">
            <div className="hero">Hero</div>
            <div className="secondary">Secondary</div>
            <div className="content">Content</div>
            <div className="toc">Toc</div>
          </div>
        </div>
        <div className="app-footer">footer</div>
      </div>
    </div>
  )
}
