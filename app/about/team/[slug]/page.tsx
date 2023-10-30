// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allMembers, Member } from "content";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export async function generateStaticParams() {
  return allMembers.map((member) => ({
    slug: member.url_path,
  }));
}
export default function Componentr({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // console.log("component/" + slug);
  // const pathname = usePathname();

  const member = allMembers.find(
    (member) => member.url_path === "/team/" + slug
  );

  // console.log(component);
  if (!member) {
    notFound();
  }

  const { name, title, location, global_id, last_edited } = member;

  return (
    <article key={global_id}>
      <h1>{title}</h1>
    </article>
  );
}
