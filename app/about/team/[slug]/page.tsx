import Link from "next/link"
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation"
import { allMembers, Member } from "content"
import { format, parseISO } from "date-fns"

// export async function generateStaticParams() {
//   return allMembers.map((member) => ({
//     slug: member.url_path,
//   }))
// }

export const generateStaticParams = (): any => {
  return allMembers.map((member) => ({
    slug: member.url_path.replace("/team/", ""),
  }))
}

export default function Componentr({ params }: { params: { slug: string } }) {
  const { slug } = params

  const member = allMembers.find(
    (member) => member.url_path === "/team/" + slug
  )

  if (!member) {
    notFound()
  }

  const { name, title, location, handle, email, global_id, last_edited } =
    member

  return (
    <article key={global_id} className="post">
      <header>
        <div className="content">
          <img src={"https://github.com/" + handle + ".png"} />
          <h1>{name}</h1>
          <p>{title}</p>
          <p>{location}</p>
          <p>@{handle}</p>
          <p>{email}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>
    </article>
  )
}
