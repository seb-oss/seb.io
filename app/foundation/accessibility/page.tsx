import type { Metadata } from "next";
import Aside from "@/core/components/nav/nav";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility",
};

export default async function Accessibility() {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>Accessibility</h1>
        </div>
      </section>
    </main>
  );
}
