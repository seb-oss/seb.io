import Aside from "@/components/nav/nav";
import { forwardRef } from "react";
import "../../style/components.css";

export const Components = forwardRef(({ ...props }, ref) => {
  return (
    <main>
      <Aside />
      <section>
        <div>some other content</div>
      </section>
    </main>
  );
});

Components.displayName = "Components";

export default Components;
