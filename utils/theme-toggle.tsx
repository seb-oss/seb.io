"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "\\" &&
        isHTMLElement(event.target) &&
        (event.target as HTMLElement).tagName !== "INPUT" &&
        (event.target as HTMLElement).tagName !== "TEXTAREA"
      ) {
        setTheme(theme === "light" ? "dark" : "light");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setTheme, theme]);

  function isHTMLElement(target: EventTarget | null): target is HTMLElement {
    return target instanceof HTMLElement;
  }

  const Light = () => (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );

  const Dark = () => (
    <svg viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "dark" ? <Light /> : <Dark />}
    </button>
  );
}