import { BibliotecaService } from "@/services/BibliotecaService";
import type { Request, Response } from "express";

export class AutorController {
  static listarAutores(req: Request, res: Response) {
    const autores = BibliotecaService.listarAutores();
    res.json(autores);
  }
}
