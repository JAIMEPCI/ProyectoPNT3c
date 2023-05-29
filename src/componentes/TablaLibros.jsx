import React, { useState } from "react";
export const TablaLibros = ({ listaLibros}) => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    const filtrarPorCategoria = () => {
      if (categoriaSeleccionada !== "") {
        const librosFiltrados = listaLibros.filter((libro) => libro.categoria === categoriaSeleccionada);
        return librosFiltrados;
      } else {
        return listaLibros;
      }
    };
  
    const librosMostrados = filtrarPorCategoria();
    
    return (
        <>
            <div>
                <label htmlFor="categoria">Busqueda por Categoria:</label>
                <select id="categoria" value={categoriaSeleccionada} onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
                    <option value="">Seleccione una Categoria</option>
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
                <button onClick={filtrarPorCategoria}>Filtrar</button>
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
                    {
                        librosMostrados.map((libro) => 
                            <tr key={libro.isbn}>
                                <td>{libro.isbn}</td>
                                <td>{libro.titulo}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.categoria}</td>
                                <td>{libro.disponible}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}