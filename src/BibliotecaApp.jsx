import { useState } from "react"
import { TablaLibros } from "./componentes/TablaLibros";
import { getLibrosPorCategoria } from "./Peticiones/getLibrosPorCateoria";


export const BibliotecaApp = () => {

    const [libros, setLibros] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    const filtrarPorCategoria = async () => {
        if (categoriaSeleccionada !== '') {
            const librosPorCategoria = await getLibrosPorCategoria(categoriaSeleccionada);
            setLibros(librosPorCategoria);
        }
    }; 

    return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <TablaLibros
              listaLibros={libros}
              setCategoriaSeleccionada={setCategoriaSeleccionada}
              filtrarPorCategoria={filtrarPorCategoria}
            />
          </div>
        </div>
      </div>
    </>
  );
};