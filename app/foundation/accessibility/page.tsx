import Aside from "@/components/nav/nav";
import { forwardRef } from "react";

export const Accessibility = forwardRef(({ ...props }, ref) => {
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
});

Accessibility.displayName = "Accessibility";

export default Accessibility;
