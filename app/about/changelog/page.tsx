import Aside from "@/components/nav/nav";
import { forwardRef } from "react";

export const Changelog = forwardRef(({ ...props }, ref) => {
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
});

Changelog.displayName = "Changelog";

export default Changelog;
