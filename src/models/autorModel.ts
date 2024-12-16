import type { Autor } from "@/types";

export class AutorModel {
    private static readonly autores: Autor[] = [];
    private static nextId = 1;

    static crear(autor: Omit<Autor, "id">): Autor {
        const nuevoAutor = {
            id: this.nextId++,
            ...autor,
        };
        this.autores.push(nuevoAutor);
        return nuevoAutor;
    }

    static obtenerTodos(): Autor[] {
        return this.autores;
    }
}
