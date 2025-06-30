import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares } from '../data/data';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const celular = celulares.find((c) => c.id === parseInt(idCelular));
  const [imgIndex, SetImagen] = useState(0);

  if (!celular) {
    return <p className="not-found">Celular no encontrado</p>;
  }

  const prevImage = () => {
    SetImagen((old) => (old === 0 ? celular.fotos.length - 1 : old - 1));
  };

  const nextImage = () => {
    SetImagen((old) => (old === celular.fotos.length - 1 ? 0 : old + 1));
  };

  return (
    <section className="detalle-container">
      <Link to="/productos" className="volver-btn">← Volver a productos</Link>
      <h2>{celular.nombre}</h2>
      <div className="detalle-main">
        <div className="galeria-detalle">
          <button onClick={prevImage} className="carousel-btn left" aria-label="Imagen anterior">&#10094;</button>
          <img
            src={celular.fotos[imgIndex]}
            alt={`${celular.nombre} imagen ${imgIndex + 1}`}
            className="detalle-img"
          />
          <button onClick={nextImage} className="carousel-btn right" aria-label="Imagen siguiente">&#10095;</button>
        </div>
        <div className="detalle-info">
          <p>{celular.descripcion}</p>
          <p className="precio-detalle">Precio: ${celular.precio}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductoDetalle;
