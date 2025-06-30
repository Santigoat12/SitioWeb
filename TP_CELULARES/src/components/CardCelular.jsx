import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardCelular.css';

const CardCelular = ({ celular }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const { id, nombre, descripcion, precio, fotos } = celular;

  const prevImage = (e) => {
    e.stopPropagation();
    setImgIndex((oldIndex) => (oldIndex === 0 ? fotos.length - 1 : oldIndex - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setImgIndex((oldIndex) => (oldIndex === fotos.length - 1 ? 0 : oldIndex + 1));
  };

  return (
    <div className="card-celular">
      <div className="carousel-container">
        <img src={fotos[imgIndex]} alt={`${nombre} imagen ${imgIndex + 1}`} />
        {fotos.length > 1 && (
          <>
            <button className="carousel-btn left" onClick={prevImage} aria-label="Imagen anterior">
              &#10094;
            </button>
            <button className="carousel-btn right" onClick={nextImage} aria-label="Imagen siguiente">
              &#10095;
            </button>
          </>
        )}
      </div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p className="precio">${precio}</p>
      <Link className="btn-detalle" to={`/producto/${id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default CardCelular;
