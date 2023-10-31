"use client";
import "./style.css";
import { useEffect, useState } from "react";
import { compareDesc, format, parseISO } from "date-fns";
import { allMembers, Member } from "content";

function Member(member: Member) {
  const firstName = member.name.split(" ")[0];
  const department = member.department;
  const [position, setPosition] = useState({
    randomX: -100,
    randomY: -100,
  });
  // const range = [30, 80];
  const range = [50, 60];
  const lightness =
    Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];

  // const lightness = Math.floor(Math.random() * 51) + 33;
  // const lightness = Math.floor(Math.random() * 31) + 88;

  const uniqueDepartments = Array.from(
    new Set(allMembers.map((m) => m.department))
  );

  const hue = Math.floor(
    (uniqueDepartments.indexOf(department) / uniqueDepartments.length) * 258
  );

  // const saturation = Math.floor(
  //   (uniqueDepartments.indexOf(department) / uniqueDepartments.length) * 100
  // );

  const saturation = Math.floor(Math.random() * 200);

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  useEffect(() => {
    const heroElement = document.querySelector(".hero") as HTMLElement;
    const width = heroElement?.offsetWidth ?? 0;
    const height = heroElement?.offsetHeight ?? 0;
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => {
        const randomX = Math.floor(Math.random() * width);
        const randomY = Math.floor(Math.random() * height);
        return { randomX, randomY };
      });
    }, Math.random() * 1000 + 2000); // Update position with a random interval between 3 and 8 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const cursorStyle = {
    "--color": color,
    "--top": `${position.randomY}px`,
    "--left": `${position.randomX}px`,
  } as React.CSSProperties;

  return (
    <div className="cursor" data-dep={department} style={cursorStyle}>
      {firstName}
    </div>
  );
}

export default function Hero() {
  const team = allMembers.sort((a, b) =>
    compareDesc(new Date(a.name), new Date(b.name))
  );

  return (
    <>
      <figure className="hero">
        <div className="code">{`</>`}</div>
        <div className="design">Tokens</div>
        <div className="docs">a11y</div>
        <div className="explode">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>I am a button</span>
          </button>
        </div>

        <div className="cursors">
          {team.map((member, idx) => (
            <Member key={idx} {...member} />
          ))}
        </div>
      </figure>
      {/* <div className="heroz">
        <section className="explodedsec">
          <article className="faux"></article>
          <article className="card">
            <p>gradient borders using transparent borders...</p>
          </article>
          <label>Content</label>
          <label>Background One</label>
          <label>Background Two</label>
        </section>
      </div> */}
    </>
  );
}
