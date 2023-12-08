export default function Stack({children, gap}) {
  return (
    <div className="stack" style={{display: "flex", flexDirection: "column", gap}}>
      {children}
    </div>
  )
}
