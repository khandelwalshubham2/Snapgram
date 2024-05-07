import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, "Name is too short"),
  username: z.string().min(2, "Username is too short"),
  email: z.string().email("Please enter correct email address"),
  password: z.string().min(8, "Password must have atleast 8 character"),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Minimum 5 characters." })
    .max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(1, { message: "This field is required" })
    .max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});