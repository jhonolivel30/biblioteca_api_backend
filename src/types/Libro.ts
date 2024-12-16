import { z } from "zod";
import type { Autor } from "@/types";

export const LibroSchema = z.object({
  id: z.number(),
  titulo: z.string(),
  autor: z.custom<Autor>(),
  disponible: z.boolean(),
});

export type Libro = z.infer<typeof LibroSchema>;
