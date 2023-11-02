import Link from "next/link"

export default function Foundation() {
  return (
    <div className="layout core">
      <section>
        <h2>Foundation</h2>
        <div>
          <Link href="/foundation">Foundation</Link>
          <Link href="/foundation/accessibility">Accessibility</Link>
          <Link href="/foundation/direction">Direction</Link>
        </div>
      </section>
    </div>
  )
}
