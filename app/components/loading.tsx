import Aside from "@/core/components/nav/nav";

export default async function Loading() {
  return (
    <main>
      <Aside />
      <section>
        <div>
          <h1>Components</h1>
        </div>
        <div>...loading</div>
      </section>
    </main>
  );
}
