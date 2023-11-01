// app/posts/[slug]/page.tsx
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation"
import Sidebar from "@/core/blocks/sidebar"
import Taber from "@/core/blocks/taber"
import { allComponents, Component } from "content"
import { format, parseISO } from "date-fns"

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    slug: component.url_path,
  }))
}
export default function Componentr({ params }: { params: { slug: string } }) {
  const { slug } = params
  // console.log("component/" + slug);
  // const pathname = usePathname();

  const component = allComponents.find(
    (component) => component.url_path === "/component/" + slug
  )

  // console.log(component);
  if (!component) {
    notFound()
  }

  const {
    title,
    version,
    keywords,
    status,
    dependencies,
    date,
    global_id,
    last_edited,
  } = component

  return (
    <article key={global_id} className="post">
      <header>
        <div className="content">
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="post-details">
          <time dateTime={last_edited} title="Published on">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <div>
              {format(parseISO(last_edited), "LLL d, yyyy")}
              <span>Last updated</span>
            </div>
          </time>
        </div>
      </header>

      <section className="main-content">
        <div>
          <p>{version}</p>
          <p>{keywords}</p>
          <p>{status}</p>
          <p>{dependencies}</p>

          <h2 id="a11y">Accessibility</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <Taber />
    </article>
  )
}
