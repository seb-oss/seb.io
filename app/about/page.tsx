"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  allChangelogs,
  allComponents,
  allMembers,
  allPosts,
  Changelog,
  Component,
  Member,
  Post,
} from "content"
import { compareDesc, format, parseISO } from "date-fns"

function MemberCard(member: Member) {
  return (
    <Link href={"about" + member.url_path} target="_blank">
      <img src={"https://github.com/" + member.handle + ".png"} />
      {member.name} <span>@{member.handle}</span>
    </Link>
  )
}

function ContributorCard({
  avatarUrl,
  login,
  contributions,
}: {
  avatarUrl: string
  login: string
  contributions: number
}) {
  return (
    <Link href={"https://github.com/" + login} target="_blank">
      <img src={avatarUrl} alt="Avatar" />
      {/* <p>{contributions}</p> */}
      <span>@{login}</span>
    </Link>
  )
}

export default function About() {
  const team = allMembers.sort((a, b) =>
    compareDesc(new Date(a.name), new Date(b.name))
  )

  const [contributors, setContributors] = useState<any[]>([])

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/sebgroup/green/contributors"
        )
        const data = await response.json()
        setContributors(data)
      } catch (error) {
        console.error("Error fetching contributors:", error)
      }
    }

    fetchContributors()
  }, [])

  return (
    <div className="home">
      <section>
        <Link href="/changelog">Changelog</Link>
        <Link href="/status">Status</Link>
      </section>
      <section>
        <h2>Team</h2>
        {team.map((member, idx) => (
          <MemberCard key={idx} {...member} />
        ))}
      </section>
      <section>
        <h2>Contributors</h2>
        {contributors.map((contributor) => (
          <ContributorCard
            key={contributor.id}
            avatarUrl={contributor.avatar_url}
            login={contributor.login}
            contributions={contributor.contributions}
          />
        ))}
      </section>
    </div>
  )
}
