import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "content must be at least of 10 character ")
    .max(300, "content must node be more then 3000 character"),
});
