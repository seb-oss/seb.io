import Link from "next/link"

import "./style.css"

interface Heading {
  slug: string
  text: string
  level: number
}

interface TOCProps {
  headings: Heading[]
}

const TOC: React.FC<TOCProps> = ({ headings }) => {
  return (
    <>
      {headings.map((heading) => (
        <Link
          key={`#${heading.slug}`}
          href={`#${heading.slug}`}
          data-level={heading.level}
        >
          {heading.text}
        </Link>
      ))}
    </>
  )
}

export default TOC
