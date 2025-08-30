"use server";

import { auth } from "@/lib/auth";
import { signInSchema, signUpSchema } from "../schema/users.schema";
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

export const signUp = async (data : z.infer<typeof signUpSchema>) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    console.log("User signed up");
    return { success: true, message: "Signed up successfully." };
  } catch (error) {
    const err = error as Error;
    return {
      success: false,
      message: err?.message || "An unknown error occurred.",
    };
  }
};
