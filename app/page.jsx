import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="flex gap-4 items-center mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
        <a
          href="https://nextjs.org/docs/app/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            title="Next.js"
            height={28}
            priority
          />
        </a>

        <span className="font-medium">+</span>
        <a
          href="https://redux.js.org/introduction/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/redux.svg"
            alt="Redux logo"
            title="Redux"
            width={100}
            height={28}
            priority
          />
        </a>
      </h1>
      <Counter />
    </div>
  );
}
