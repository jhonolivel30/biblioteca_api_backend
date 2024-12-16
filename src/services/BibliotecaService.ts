import { AutorModel, LibroModel } from "@/models";
import type { Libro, Autor } from "@/types";

export class BibliotecaService {
  
  static cargarDatosDePrueba() {
    // Crear autores de prueba
    const gabriel = AutorModel.crear({
      nombre: "Gabriel García Márquez",
      nacionalidad: "Colombiana",
    });

    const julio = AutorModel.crear({
      nombre: "Julio Cortázar",
      nacionalidad: "Argentina",
    });

    const isabel = AutorModel.crear({
      nombre: "Isabel Allende",
      nacionalidad: "Chilena",
    });

    const neruda = AutorModel.crear({
      nombre: "Pablo Neruda",
      nacionalidad: "Chilena",
    });

    // Crear libros de prueba
    LibroModel.crear({
      titulo: "Cien Años de Soledad",
      autor: gabriel,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "El Amor en los Tiempos del Cólera",
      autor: gabriel,
      disponible: false,
    });

    LibroModel.crear({
      titulo: "Rayuela",
      autor: julio,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "La Casa de los Espíritus",
      autor: isabel,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Eva Luna",
      autor: isabel,
      disponible: false,
    });

    LibroModel.crear({
      titulo: "Veinte Poemas de Amor y una Canción Desesperada",
      autor: neruda,
      disponible: true,
    });
  }

  static registrarAutor(autor: Omit<Autor, "id">): Autor {
    return AutorModel.crear(autor);
  }

  static registrarLibro(libro: Omit<Libro, "id">): Libro {
    return LibroModel.crear(libro);
  }

  static listarAutores(): Autor[] {
    return AutorModel.obtenerTodos();
  }

  static listarLibros(): Libro[] {
    return LibroModel.obtenerTodos();
  }

  static listarLibrosDisponibles(): Libro[] {
    return LibroModel.obtenerDisponibles();
  }

  static listarLibrosNoDisponibles(): Libro[] {
    return LibroModel.obtenerNoDisponibles();
  }
}
