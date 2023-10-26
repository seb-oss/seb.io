import type { Metadata } from "next";
import Aside from "@/core/components/nav/nav";

export const metadata: Metadata = {
  title: "Status",
  description: "Status",
};

export default async function Status() {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>Status</h1>
        </div>
      </section>
    </main>
  );
}
