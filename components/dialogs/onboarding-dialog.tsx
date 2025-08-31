"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCurrentUser, updateUserSlug } from "@/server/user";

export function OnboardingDialog() {
  const [slug, setSlug] = useState<string>("");
  const [open, setOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkUserSlug = async () => {
      const user = await getCurrentUser();
      if (user?.slug) {
        setSlug(user.slug);
        setOpen(false);
        router.push(`/${user.slug}`);
      } else {
        setSlug(user?.name?.toLowerCase().replace(/\s+/g, "-") || "");
        setOpen(true);
      }
    };
    checkUserSlug();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const { success, message, user } = await updateUserSlug(slug);

      if (success) {
        toast.success(message ?? "Slug updated successfully!");
        setOpen(false);
        router.push(`/${user?.slug}`);
      } else {
        toast.error(message ?? "Failed to update slug");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Let&apos;s get your URL</DialogTitle>
            <DialogDescription>
              This will be your public username and shown in your profile URL.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
