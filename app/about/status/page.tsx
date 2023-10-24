import Aside from "@/components/nav/nav";
import { forwardRef } from "react";

export const Status = forwardRef(({ ...props }, ref) => {
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
});

Status.displayName = "Status";

export default Status;
