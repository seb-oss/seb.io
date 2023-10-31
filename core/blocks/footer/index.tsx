import "./style.css";
export default function Footer() {
  const year = new Date().getFullYear();
  const symbol = "\u00A9";
  const text = `SEB ${symbol} ${year}`;

  return (
    <footer>
      <div className="container">{text}</div>
    </footer>
  );
}
