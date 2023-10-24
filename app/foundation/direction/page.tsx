import Aside from "@/components/nav/nav";
import { forwardRef } from "react";

export const Direction = forwardRef(({ ...props }, ref) => {
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
});

Direction.displayName = "Direction";

export default Direction;
