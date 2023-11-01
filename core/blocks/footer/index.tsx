import "./style.css"

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = "\u00A9"
  const text = `SEB ${symbol} ${year}`

  return (
    <footer>
      <div className="container">
        {text} —
        <button type="button" data-cc="c-settings">
          Cookie preferences
        </button>
      </div>
    </footer>
  )
}
