import express from "express";
import cors from "cors";
import autorRoutes from "@/routes/autorRoutes";
import libroRoutes from "@/routes/libroRoutes";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "Frontend URL", "http://localhost:4173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/autores", autorRoutes);
app.use("/api/libros", libroRoutes);

export default app;
