import type { Metadata } from "next";
import Aside from "@/core/components/nav/nav";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

export default async function Blog() {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>Blog</h1>
        </div>
      </section>
    </main>
  );
}
