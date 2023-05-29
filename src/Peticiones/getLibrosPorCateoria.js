export const getLibrosPorCategoria = async (categoria, cantidadLibros) => {

    const url = `http://localhost:8081/estudiantes/filtro?categoria=${categoria}&cantidadLibros=${cantidadLibros}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const listaLibros = data.map(libro => ({
        isbn: libro.isbn,
        titulo: libro.titulo,
        autor: libro.autor,
        categoria: libro.categoria,
        disponibilidad: libro.disponibilidad
    }));
    return listaLibros;

}
