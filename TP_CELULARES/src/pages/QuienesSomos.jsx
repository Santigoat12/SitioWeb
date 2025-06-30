import React from 'react';
import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-container">
      <div className="quienes-content">
        <div className="quienes-texto">
          <h1>¿Quiénes somos?</h1>
          <p>
            En <strong>MISCELUS4956</strong>, redefinimos la experiencia de comprar tecnología móvil. Desde nuestros comienzos, nos enfocamos en brindar calidad, diseño y confianza, ofreciendo los mejores smartphones del mercado, cuidadosamente seleccionados para cada usuario.
          </p>
          <p>
            Nuestro objetivo es que cada cliente encuentre en nuestro sitio la opción ideal que se adapte a sus necesidades y estilo. Trabajamos con marcas líderes como Apple, Samsung, Xiaomi y Motorola, y ofrecemos atención personalizada, envíos rápidos y garantía asegurada.
          </p>
          <p>
            Más que vender celulares, creamos una comunidad tecnológica con estilo.
          </p>
        </div>

        <div className="quienes-img">
          <img
                src = "https://media.istockphoto.com/id/1334874327/es/foto/cliente-masculino-que-recibe-asistencia-de-una-vendedora.jpg?s=612x612&w=0&k=20&c=bDUQO2SXl5VkJN51PHAikS_wZ805VT2d1M_EXelQAvk="            alt="Equipo MISCELUS4956"
          />
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
