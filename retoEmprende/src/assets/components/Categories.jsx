import React from 'react';
import Product from './Product'; 
import listaDeProductos from '../const/listaDeProductos';

const Categories = ({ tipo }) => {

  const productosFiltrados = listaDeProductos.filter(producto => producto.categoria === tipo);

  return (
    <div>
      <h2>Productos de la categoría: {tipo}</h2>
      {productosFiltrados.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {productosFiltrados.map((producto, index) => (
            <Product 
              key={index}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              comunidad={producto.comunidad}
              categoria={producto.categoria}
              disponibilidad={producto.disponibilidad}
            />
          ))}
        </div>
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default Categories;
