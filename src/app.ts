import express from "express";
import chalk from "chalk";
import { BibliotecaService } from "./services/BibliotecaService";
import autorRoutes from "./routes/autorRoutes";
import libroRoutes from "./routes/libroRoutes";

const app = express();
const PORT = 3000;

BibliotecaService.cargarDatosDePrueba();

app.use(express.json());

app.use("/autores", autorRoutes);
app.use("/libros", libroRoutes);

app.listen(PORT, () => {
    console.log(`
    ${chalk.green.bold("🚀 Server is running!\n")}    
    ${chalk.magentaBright("📚 Biblioteca API:")} ${chalk.yellow("Version 1.0.0")}
    ${chalk.blueBright("📡 API:")} ${chalk.whiteBright.underline(`http://localhost:${PORT}`)}
    ${chalk.yellow("⭐ Environment:")} ${chalk.magenta(process.env.NODE_ENV ?? "development")}
    `);
});
