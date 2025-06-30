import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { celulares } from '../data/data';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const navigate = useNavigate();
  const [celular, setCelular] = useState(null);
  const [indexImagen, setIndexImagen] = useState(0);

  useEffect(() => {
    const encontrado = celulares.find((cel) => cel.id === parseInt(idCelular));
    setCelular(encontrado);
    setIndexImagen(0);
  }, [idCelular]);

  const siguiente = () => {
    if (celular) {
      setIndexImagen((prev) => (prev + 1) % celular.fotos.length);
    }
  };

  const anterior = () => {
    if (celular) {
      setIndexImagen((prev) =>
        prev === 0 ? celular.fotos.length - 1 : prev - 1
      );
    }
  };

  if (!celular) return <p className="detalle-cargando">Cargando celular...</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-layout">
        <div className="detalle-carousel">
          <button className="detalle-arrow left" onClick={anterior}>‹</button>
          <div className="detalle-imagen">
            <img src={celular.fotos[indexImagen]} alt={celular.nombre} />
          </div>
          <button className="detalle-arrow right" onClick={siguiente}>›</button>
        </div>

        <div className="detalle-info">
          <h2 className="detalle-titulo">{celular.nombre}</h2>
          <p className="detalle-descripcion">{celular.descripcion}</p>
          <p className="detalle-precio">${celular.precio}</p>

          <div className="detalle-botones">
            <button className="detalle-btn comprar">Comprar</button>
            <button className="detalle-btn volver" onClick={() => navigate(-1)}>Volver</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
