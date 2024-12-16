import { LibroController } from "@/controllers";
import { Router } from "express";

const router = Router();

router.get("/", LibroController.listarLibros);
router.get("/disponibles", LibroController.listarLibrosDisponibles);
router.get("/nodisponibles", LibroController.listarLibrosNoDisponibles);

export default router;
