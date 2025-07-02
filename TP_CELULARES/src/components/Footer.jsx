import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Miscelus4956</h3>
          <p>© 2025 Todos los derechos reservados.</p>
        </div>

        <div className="footer-links">
          <span>Inicio</span>
          <span>Productos</span>
          <span>Contacto</span>
        </div>

        <div className="footer-social">
          <span>Instagram</span>
          <span>GitHub</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
