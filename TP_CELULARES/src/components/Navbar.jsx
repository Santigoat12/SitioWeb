import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../data/data';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProductos = () => setProductosOpen(!productosOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
        MISCELUS4956
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? 'active-link' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/quienes-somos" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? 'active-link' : ''}>
              Quienes Somos
            </NavLink>
          </li>
          <li className="productos-menu" onClick={toggleProductos}>
            <span className="productos-link">
              Productos <span className="arrow">{productosOpen ? '▲' : '▼'}</span>
            </span>
            <ul className={`dropdown ${productosOpen ? 'show' : ''}`}>
              <li>
                <NavLink
                  to="/productos"
                  onClick={() => {
                    setMenuOpen(false);
                    setProductosOpen(false);
                  }}
                >
                  Ver todos
                </NavLink>
              </li>
              {marcas.map((marca) => (
                <li key={marca.id}>
                  <NavLink
                    to={`/productos/marca/${marca.id}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setProductosOpen(false);
                    }}
                  >
                    {marca.nombre}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <NavLink to="/contacto" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? 'active-link' : ''}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
