"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const slug = pathname.split("/").filter(Boolean).pop();

  return (
    <main className="flex items-center flex-col gap-4 justify-center min-h-screen">
      <h1>
        Hello: <b>{slug}</b>
      </h1>

      <Button onClick={() => router.push("/settings")}>Settings</Button>
    </main>
  );
};

export default page;
