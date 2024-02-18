import Content from "@/core/layouts/content/content"

import "./page.css"

export default function GridArea() {
  return (
    <Content layout="content">
      <div className="grid-area">
        <div className="grid-area-alert">alert</div>
        <div className="grid-area-header">header</div>
        <div className="grid-area-layout">
          <div className="sidebar">sidebar</div>
          <div className="content">
            <div className="hero">Hero</div>
            <div className="secondary">Secondary</div>
            <div className="content">Content</div>
            <div className="toc">Toc</div>
          </div>
        </div>
        <div className="grid-area-footer">footer</div>
      </div>
    </Content>
  )
}
