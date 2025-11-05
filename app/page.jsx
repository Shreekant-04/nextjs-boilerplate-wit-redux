import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-2xl p-6">
        <h1 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Next.js with Geist Fonts!
        </h1>
        <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300">
          This is a simple example of using Google Fonts in a Next.js
          application with a custom layout.
        </p>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Counter />
      </div>
    </div>
  );
}
