"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 gap-16">
      <main className="text-center max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-center">
          <span className="bg-gradient-to-r from-[#f9ced5] via-purple-400 to-indigo-500 bg-clip-text text-transparent">
            One link for everything you create.
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Share your skills, grow your audience, and earn from what you love
          doing.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => router.push("/signup")}>Get Started</Button>
          <Button variant="outline" onClick={() => router.push("/signin")}>
            Sign In
          </Button>
        </div>
      </main>

      {/* <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl">
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold">Feature One</h3>
          <p className="mt-2 text-muted-foreground">
            Short description of how this helps users.
          </p>
        </div>
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold">Feature Two</h3>
          <p className="mt-2 text-muted-foreground">
            Another quick benefit your product provides.
          </p>
        </div>
        <div className="p-6 rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold">Feature Three</h3>
          <p className="mt-2 text-muted-foreground">
            Final key feature to make the product valuable.
          </p>
        </div>
      </section> */}
    </div>
  );
}
