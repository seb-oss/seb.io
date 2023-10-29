// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allChangelogs } from "content";

export async function generateStaticParams() {
  return allChangelogs.map((changelog) => ({
    slug: changelog.url_path,
  }));
}

export default function Changelog({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const changelog = allChangelogs.find(
    (changelog) => changelog.url_path === slug
  );
  if (!changelog) {
    notFound();
  }
  return (
    <article>
      <div>
        <time dateTime={changelog.date}>
          {format(parseISO(changelog.date), "LLLL d, yyyy")}
        </time>
        <h1>{changelog.title}</h1>
      </div>
    </article>
  );
}
