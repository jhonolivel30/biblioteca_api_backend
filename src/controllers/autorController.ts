import type { Request, Response } from "express";
import { BibliotecaService } from "../services/BibliotecaService";

export class AutorController {
  static listarAutores(req: Request, res: Response) {
    const autores = BibliotecaService.listarAutores();
    res.json(autores);
  }
}
