import "./style.css";
export default function Article({ children }: { children: React.ReactNode }) {
  return <main className="component">{children}</main>;
}
