import { Navbar } from "@/components";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center p-24">
        <span className="text-5xl">Hello World!</span>
      </main>
    </>
  );
}
