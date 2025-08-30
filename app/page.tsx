"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-row gap-4 items-center sm:items-start">
        <Button onClick={()=> router.push("/signup")}>Sign Up</Button>
        <Button onClick={()=> router.push("/signin")}>Sign In</Button>
      </main>
    </div>
  );
}
