import Link from "next/link"

import "./style.css"

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = "\u00A9"
  const text = `${symbol}  ${year} Green Design System`

  return (
    <footer className="main-footer">
      <h2>
        <Link href="/">Green Design System</Link>
      </h2>
      <div className="content">
        <div className="col">
          <nav>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <button type="button" data-cc="c-settings">
                  Cookie preferences
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col">
          <nav>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <span>{text}</span>
      </div>
    </footer>
  )
}
