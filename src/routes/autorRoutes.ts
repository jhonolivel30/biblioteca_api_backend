import { AutorController } from "@/controllers";
import { Router } from "express";

const router = Router();

router.get("/", AutorController.listarAutores);

export default router;
