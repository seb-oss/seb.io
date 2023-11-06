import Link from "next/link"

import "./style.css"

interface Heading {
  slug: string
  text: string
}

interface TOCProps {
  headings: Heading[]
}

const TOC: React.FC<TOCProps> = ({ headings }) => {
  return (
    <>
      {headings.map((heading) => (
        <Link key={`#${heading.slug}`} href={`#${heading.slug}`}>
          {heading.text}
        </Link>
      ))}
    </>
  )
}

export default TOC
