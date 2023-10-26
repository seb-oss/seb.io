import type { Metadata } from "next";
import Aside from "@/core/components/nav/nav";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Changelog",
};

export default async function Changelog() {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>Changelog</h1>
        </div>
      </section>
    </main>
  );
}
