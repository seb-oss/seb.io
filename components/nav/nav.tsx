import Link from "next/link";
import { forwardRef } from "react";

export const Aside = forwardRef(({ ...props }, ref) => {
  return (
    <aside>
      <nav>
        <Link href="/components">Components</Link>
        <Link href="/foundation">Foundation</Link>
        <Link href="/foundation/accessibility">Accessibility</Link>
        <Link href="/foundation/direction">Direction</Link>
        <Link href="/about">About</Link>
        <Link href="/about/changelog">Changelog</Link>
        <Link href="/about/status">Status</Link>
      </nav>
    </aside>
  );
});

Aside.displayName = "Aside";

export default Aside;
