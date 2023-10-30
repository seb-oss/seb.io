import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import {
  allPosts,
  Post,
  allComponents,
  Component,
  allChangelogs,
  Changelog,
  allMembers,
  Member,
} from "content";

function MemberCard(member: Member) {
  return (
    <Link href={"about" + member.url_path}>
      <img src={"https://github.com/" + member.handle + ".png"} />
      {member.name} <span>@{member.handle}</span>
    </Link>
  );
}

export default function About() {
  const team = allMembers.sort((a, b) =>
    compareDesc(new Date(a.name), new Date(b.name))
  );
  return (
    <div className="home">
      <section>
        <h2>Team</h2>
        {team.map((member, idx) => (
          <MemberCard key={idx} {...member} />
        ))}
      </section>
    </div>
  );
}
