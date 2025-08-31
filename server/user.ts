"use server";

import prisma from "@/db/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getUserSlugById = async (userId: string): Promise<string | null> => {
  if (!userId) return null;
  
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { slug: true }
  });
  
  return user?.slug || null;
};

export const getCurrentUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session?.user, "USER DETAILS");
  return session?.user;
};

export const updateUserSlug = async (newSlug: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return {success: false, message: "User not authenticated"};
  }

  const existingUserSlug = await prisma.user.findUnique({
    where: { slug: newSlug },
  });

  if (existingUserSlug) {
    return {success: false, message: "Slug is already taken"};
  }

  const updatedUser = await prisma.user.update({
    where: { id: session.user.id },
    data: { slug: newSlug },
  });

  return {success: true, message: "Slug updated successfully", user: updatedUser}
}