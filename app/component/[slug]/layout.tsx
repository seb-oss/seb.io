import Layout from "@/core/layouts/component"

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
