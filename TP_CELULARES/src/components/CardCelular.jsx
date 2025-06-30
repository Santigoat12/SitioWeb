import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardCelular.css';

const CardCelular = ({ celular }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const prevImage = (e) => {
    e.stopPropagation();
    setImgIndex((oldIndex) => (oldIndex === 0 ? celular.fotos.length - 1 : oldIndex - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setImgIndex((oldIndex) => (oldIndex === celular.fotos.length - 1 ? 0 : oldIndex + 1));
  };

  return (
    <div className="card-celular">
      <div className="carousel-container">
        <img src={celular.fotos[imgIndex]} alt={`${celular.nombre} imagen ${imgIndex + 1}`} />
        {celular.fotos.length > 1 && (
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
      <h3>{celular.nombre}</h3>
      <p>{celular.descripcion}</p>
      <p className="precio">${celular.precio}</p>
      <Link className="btn-detalle" to={`/producto/${celular.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default CardCelular;
