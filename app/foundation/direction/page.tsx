import type { Metadata } from "next";
import Aside from "@/core/components/nav/nav";

export const metadata: Metadata = {
  title: "Direction",
  description: "Direction",
};

export default async function Direction() {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>Direction</h1>
        </div>
      </section>
    </main>
  );
}
