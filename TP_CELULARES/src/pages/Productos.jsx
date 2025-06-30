// src/pages/Productos.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/CardCelular';
import './Productos.css';

const Productos = () => {
  const { idMarca } = useParams();


  const celularesFiltrados = idMarca
    ? celulares.filter((c) => c.marcaId === parseInt(idMarca))
    : celulares;


  const nombreMarca = idMarca
    ? marcas.find((m) => m.id === parseInt(idMarca))?.nombre || 'Marca no encontrada'
    : 'Todos los celulares';

  return (
    <section className="productos-container">
      <h2>{nombreMarca}</h2>
      {celularesFiltrados.length === 0 ? (
        <p>No hay celulares para mostrar en esta categoría.</p>
      ) : (
        <div className="grid-celulares">
          {celularesFiltrados.map((cel) => (
            <CardCelular key={cel.id} celular={cel} />
          ))}
        </div>
      )}
      <Link to="/productos" className="volver-btn">
        Ver todos los productos
      </Link>
    </section>
  );
};

export default Productos;
