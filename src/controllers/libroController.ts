import { BibliotecaService } from "@/services/BibliotecaService";
import type { Request, Response } from "express";


export class LibroController {
  static listarLibros(req: Request, res: Response) {
    const libros = BibliotecaService.listarLibros();
    res.json(libros);
  }

  static listarLibrosDisponibles(req: Request, res: Response) {
    const librosDisponibles = BibliotecaService.listarLibrosDisponibles();
    res.json(librosDisponibles);
  }

  static listarLibrosNoDisponibles(req: Request, res: Response) {
    const librosNoDisponibles = BibliotecaService.listarLibrosNoDisponibles();
    res.json(librosNoDisponibles);
  }
}
