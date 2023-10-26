import type { Metadata } from "next";
import Aside from "@/core/components/nav/nav";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export default async function About() {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>About</h1>
        </div>
      </section>
    </main>
  );
}
