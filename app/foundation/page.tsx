import Link from "next/link"

export default function Foundation() {
  return (
    <section>
      <h2>Other pages</h2>
      <div>
        <Link href="/foundation/accessibility">Accessibility</Link>
        <Link href="/foundation/direction">Direction</Link>
      </div>
    </section>
  )
}
