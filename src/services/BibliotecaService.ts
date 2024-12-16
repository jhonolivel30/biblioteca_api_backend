import { AutorModel } from "../models/autorModel";
import { LibroModel } from "../models/libroModel";
import { Autor } from "../types/Autor";
import { Libro } from "../types/Libro";


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

    const borges = AutorModel.crear({
      nombre: "Jorge Luis Borges",
      nacionalidad: "Argentina",
    });

    const vargas = AutorModel.crear({
      nombre: "Mario Vargas Llosa",
      nacionalidad: "Peruana",
    });

    const paz = AutorModel.crear({
      nombre: "Octavio Paz",
      nacionalidad: "Mexicana",
    });

    const rulfo = AutorModel.crear({
      nombre: "Juan Rulfo",
      nacionalidad: "Mexicana",
    });

    const mistral = AutorModel.crear({
      nombre: "Gabriela Mistral",
      nacionalidad: "Chilena",
    });

    const benedetti = AutorModel.crear({
      nombre: "Mario Benedetti",
      nacionalidad: "Uruguaya",
    });

    const nervo = AutorModel.crear({
      nombre: "Amado Nervo",
      nacionalidad: "Mexicana",
    });

    const dario = AutorModel.crear({
      nombre: "Rubén Darío",
      nacionalidad: "Nicaragüense",
    });

    const vallejo = AutorModel.crear({
      nombre: "César Vallejo",
      nacionalidad: "Peruana",
    });

    const carpentier = AutorModel.crear({
      nombre: "Alejo Carpentier",
      nacionalidad: "Cubana",
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

    LibroModel.crear({
      titulo: "El Aleph",
      autor: borges,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Ficciones",
      autor: borges,
      disponible: false,
    });

    LibroModel.crear({
      titulo: "La Ciudad y los Perros",
      autor: vargas,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "El Laberinto de la Soledad",
      autor: paz,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Pedro Páramo",
      autor: rulfo,
      disponible: false,
    });

    LibroModel.crear({
      titulo: "Desolación",
      autor: mistral,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "La Tregua",
      autor: benedetti,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Plenitud",
      autor: nervo,
      disponible: false,
    });

    LibroModel.crear({
      titulo: "Azul",
      autor: dario,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Los Heraldos Negros",
      autor: vallejo,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "El Reino de Este Mundo",
      autor: carpentier,
      disponible: false,
    });

    LibroModel.crear({
      titulo: "Crónica de una Muerte Anunciada",
      autor: gabriel,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Paula",
      autor: isabel,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Bestiario",
      autor: julio,
      disponible: false,
    });

    LibroModel.crear({
      titulo: "El Hacedor",
      autor: borges,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Conversación en La Catedral",
      autor: vargas,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "El Llano en Llamas",
      autor: rulfo,
      disponible: false,
    });

    LibroModel.crear({
      titulo: "Inventario Uno",
      autor: benedetti,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "Prosas Profanas",
      autor: dario,
      disponible: true,
    });

    LibroModel.crear({
      titulo: "El Siglo de las Luces",
      autor: carpentier,
      disponible: false,
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
