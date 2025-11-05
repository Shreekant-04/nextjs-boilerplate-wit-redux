"use client";

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/features/counterSlice";
import Image from "next/image";

const IconGitHub = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.6.07-.6 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [pulse, setPulse] = useState(false);
  const [notice, setNotice] = useState("");
  const containerRef = useRef(null);

  // Pulse animation when count changes
  useEffect(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 220);
    return () => clearTimeout(t);
  }, [count]);

  // clear notice after a short delay
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 1200);
    return () => clearTimeout(t);
  }, [notice]);

  const doAction = (type) => {
    if (type === "inc") {
      dispatch(increment());
      setNotice("+1");
    } else if (type === "dec") {
      dispatch(decrement());
      setNotice("-1");
    } else if (type === "reset") {
      dispatch(reset());
      setNotice("Reset");
    }
  };

  // keyboard shortcuts when container is focused
  const handleKeyDown = (e) => {
    if (e.key === "+" || e.key === "=") {
      doAction("inc");
    } else if (e.key === "-") {
      doAction("dec");
    } else if (e.key.toLowerCase() === "r") {
      doAction("reset");
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="max-w-lg mx-auto p-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl ring-1 ring-black/10 focus:outline-none focus:ring-4 focus:ring-white/30"
      role="region"
      aria-label="Counter card"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/** GitHub */}
          <a
            href="https://github.com/Shreekant-04/nextjs-boilerplate-wit-redux"
            target="_blank"
            rel="noopener noreferrer"
            title="Boilerplate repo"
            className="flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 transition"
            aria-label="Boilerplate repository"
          >
            <IconGitHub className="w-5 h-5 text-white" />
          </a>

          {/** Next.js */}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            title="Next.js"
            className="flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 transition"
            aria-label="Next.js website"
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={28}
              height={28}
              priority
            />
          </a>

          {/** Vercel */}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Vercel"
            className="flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 transition"
            aria-label="Vercel website"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logo"
              width={24}
              height={24}
              priority
            />
          </a>
        </div>

        <div className="text-right">
          <div className="text-xs text-white/80">Next + Vercel Boilerplate</div>
          <div className="text-2xs text-white/60">Press + / - / R</div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div
          className={`rounded-full w-36 h-36 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-inner transition-transform duration-200 ${
            pulse ? "scale-105" : ""
          }`}
        >
          <div className="text-5xl font-extrabold tracking-tight">{count}</div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => doAction("dec")}
            className="w-14 h-14 rounded-full bg-black/20 hover:bg-black/30 active:scale-95 flex items-center justify-center text-xl font-bold transition shadow-md"
            aria-label="Decrement"
            title="Decrement"
          >
            –
          </button>

          <button
            onClick={() => doAction("inc")}
            className="w-14 h-14 rounded-full bg-white text-indigo-600 hover:brightness-95 active:scale-95 flex items-center justify-center text-2xl font-bold transition shadow-xl"
            aria-label="Increment"
            title="Increment"
          >
            +
          </button>

          <button
            onClick={() => doAction("reset")}
            className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-sm transition shadow-sm"
            aria-label="Reset"
            title="Reset counter"
          >
            Reset
          </button>
        </div>

        <div className="h-6">
          <div
            className="text-sm text-white/90 font-medium"
            aria-live="polite"
            role="status"
          >
            {notice}
          </div>
        </div>
      </div>

      <p className="text-xs text-white/70 mt-4 text-center">
        A refreshed UI for the boilerplate — keyboard shortcuts:{" "}
        <span className="font-medium">+</span>,{" "}
        <span className="font-medium">-</span>,{" "}
        <span className="font-medium">R</span>.
      </p>
    </div>
  );
}
