import { Router } from "express";
import { LibroController } from "../controllers/libroController";

const router = Router();

router.get("/", LibroController.listarLibros);
router.get("/disponibles", LibroController.listarLibrosDisponibles);
router.get("/nodisponibles", LibroController.listarLibrosNoDisponibles);

export default router;
