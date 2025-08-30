"use server";

import { auth } from "@/lib/auth";
import { signInSchema } from "../schema/users.schema";
import { z } from "zod";

export const signIn = async (data: z.infer<typeof signInSchema>) => {
  try {
    await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });
    console.log("User signed in");
    return { success: true, message: "Signed in successfully." };
  } catch (error) {
    console.log(error);
    const err = error as Error;
    return {
      success: false,
      message: err?.message || "An unknown error occurred.",
    };
  }
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "user1@email.com",
      password: "password",
      name: "username1",
    },
  });
};
