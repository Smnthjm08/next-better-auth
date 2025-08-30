import z from "zod";

export const signInSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  // name: z.string().min(2, "Name must be at least 2 characters long").max(100, "Name must be at most 100 characters long"),
});