import type { Metadata } from "next";
import Aside from "@/core/components/nav/nav";

export const metadata: Metadata = {
  title: "Foundation",
  description: "Foundation",
};

export default async function Foundation() {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>Foundation</h1>
        </div>
      </section>
    </main>
  );
}
