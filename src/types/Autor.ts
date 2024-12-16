import { z } from "zod";

export const AutorSchema = z.object({
  id: z.number(),
  nombre: z.string(),
  nacionalidad: z.string(),
});

export type Autor = z.infer<typeof AutorSchema>;
