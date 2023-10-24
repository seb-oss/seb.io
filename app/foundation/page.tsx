import Aside from "@/components/nav/nav";
import { forwardRef } from "react";

export const About = forwardRef(({ ...props }, ref) => {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>About</h1>
        </div>
      </section>
    </main>
  );
});

About.displayName = "About";

export default About;
