import { Router } from "express";
import { AutorController } from "../controllers/autorController";

const router = Router();

router.get("/", AutorController.listarAutores);

export default router;
