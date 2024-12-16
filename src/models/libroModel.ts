import { Libro } from "../types/Libro";


export class LibroModel {
    private static readonly libros: Libro[] = [];
    private static nextId = 1;

    static crear(libro: Omit<Libro, "id">): Libro {
        const nuevoLibro = {
            id: this.nextId++,
            ...libro,
        };
        this.libros.push(nuevoLibro);
        return nuevoLibro;
    }

    static obtenerTodos(): Libro[] {
        return this.libros;
    }

    static obtenerDisponibles(): Libro[] {
        return this.libros.filter((libro) => libro.disponible);
    }

    static obtenerNoDisponibles(): Libro[] {
        return this.libros.filter((libro) => !libro.disponible);
    }
}
