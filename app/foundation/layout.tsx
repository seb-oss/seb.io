import Layout from "@/core/layouts/core"

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
