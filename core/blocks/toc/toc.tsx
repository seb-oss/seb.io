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
    <aside className="toc">
      <span>On this page</span>
      <nav>
        {headings.map((heading) => (
          <Link
            key={`#${heading.slug}`}
            href={`#${heading.slug}`}
            data-level={heading.level}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default TOC
