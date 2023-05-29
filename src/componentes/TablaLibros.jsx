import React, { useState } from "react";

export const TablaLibros = ({ listaLibros }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [tituloSeleccionado, setTituloSeleccionado] = useState("");
  const [autorSeleccionado, setAutorSeleccionado] = useState("");

  const filtrarPorCategoria = () => {
    if (categoriaSeleccionada !== "") {
      const librosFiltrados = listaLibros.filter(
        (libro) => libro.categoria === categoriaSeleccionada
      );
      return librosFiltrados;
    } else {
      return listaLibros;
    }
  };

  const filtrarPorTitulo = () => {
    if (tituloSeleccionado !== "") {
      const librosFiltrados = listaLibros.filter(
        (libro) => libro.titulo === tituloSeleccionado
      );
      return librosFiltrados;
    } else {
      return listaLibros;
    }
  };

  const filtrarPorAutor = () => {
    if (autorSeleccionado !== "") {
      const librosFiltrados = listaLibros.filter(
        (libro) => libro.autor === autorSeleccionado
      );
      return librosFiltrados;
    } else {
      return listaLibros;
    }
  };

  const librosFiltradosCategoria = filtrarPorCategoria();
  const librosFiltradosTitulo = filtrarPorTitulo();
  const librosFiltradosAutor = filtrarPorAutor();

  // Obtener la intersección de los libros filtrados por categoría, título y autor
  const librosMostrados = librosFiltradosCategoria.filter(
    (libro) =>
      librosFiltradosTitulo.includes(libro) &&
      librosFiltradosAutor.includes(libro)
  );

  return (
    <>
      <div>
        <label htmlFor="categoria">Búsqueda por Categoría:</label>
        <select
          id="categoria"
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          <option value="">Seleccione una Categoría</option>
          <option value="CIENTIFICO">CIENTIFICO</option>
          <option value="LITERATURA">LITERATURA</option>
          <option value="LINGUISTICO">LINGUISTICO</option>
          <option value="VIAJE">VIAJE</option>
          <option value="BIOGRAFIA">BIOGRAFIA</option>
          <option value="RECREATIVO">RECREATIVO</option>
          <option value="POETICO">POETICO</option>
          <option value="JUVENIL">JUVENIL</option>
          <option value="FICCION">FICCION</option>
          <option value="COMEDIA">COMEDIA</option>
        </select>
      </div>

      <div>
        <label htmlFor="titulo">Búsqueda por Título:</label>
        <input
          type="text"
          id="titulo"
          value={tituloSeleccionado}
          onChange={(e) => setTituloSeleccionado(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="autor">Búsqueda por Autor:</label>
        <input
          type="text"
          id="autor"
          value={autorSeleccionado}
          onChange={(e) => setAutorSeleccionado(e.target.value)}
        />
      </div>
    
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Categoria</th>
            <th scope="col">Disponibilidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {librosMostrados.map((libro) => (
            <tr key={libro.isbn}>
              <td>{libro.isbn}</td>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.categoria}</td>
              <td>{libro.disponible}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
