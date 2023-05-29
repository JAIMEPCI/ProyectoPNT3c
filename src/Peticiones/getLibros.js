
export const getLibros = async () => {

    const url = 'http://localhost:8081/libreria/todos'
    const resp = await fetch(url)
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
