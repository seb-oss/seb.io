import Layout from "@/core/layouts/post"

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
