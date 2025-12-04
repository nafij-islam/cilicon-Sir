import z from "zod";

 
export  const signUpSchema = z.object({
    userName: z
      .string({ message: "UserName must be Chracter" })
      .min(5, { message: "Username must be at least 5 characters long." })
      .toUpperCase(),
    email: z
      .string()
      .email({ message: "Please enter a valid email address." })
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: "Email format is invalid.",
      })
      .refine(
        (value) => value.includes("@") && value.split("@")[1].includes("."),
        {
          message: "Email must contain a valid domain.",
        }
      ),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{8,}$/,
        {
          message:
            "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        }
      ),
  });

  export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});
