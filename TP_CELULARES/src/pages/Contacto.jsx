import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      setError('Todos los campos son obligatorios');
      return;
    }
    if (!validarEmail(email)) {
      setError('El email no es válido');
      return;
    }

    setError('');
    setEnviado(true);
    setNombre('');
    setEmail('');
    setMensaje('');

    setTimeout(() => setEnviado(false), 3000); // oculta mensaje luego de 3 seg
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        {enviado && <p className="exito">Mensaje enviado con éxito ✅</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
