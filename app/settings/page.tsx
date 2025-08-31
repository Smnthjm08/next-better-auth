"use client";

import { LogoutButton } from "@/components/buttons/logout";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/server/user";

export default function DashboardPage() {
  return (
    <div className="flex items-center flex-col gap-4 justify-center min-h-screen">
      <div>
        <div>My Profile Page</div>
      </div>
      <div className="flex gap-4">
        <Button onClick={getCurrentUser}>Welcome</Button>
        <LogoutButton />
      </div>
    </div>
  );
}
