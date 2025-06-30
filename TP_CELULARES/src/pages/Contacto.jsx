import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const erroresTemp = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.trim()) erroresTemp.nombre = 'El nombre es obligatorio.';
    if (!regexEmail.test(email)) erroresTemp.email = 'Correo inválido.';
    if (mensaje.length < 10) erroresTemp.mensaje = 'El mensaje debe tener al menos 10 caracteres.';

    setErrores(erroresTemp);
    return Object.keys(erroresTemp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setEnviado(true);
      setNombre('');
      setEmail('');
      setMensaje('');
      setErrores({});
      setTimeout(() => setEnviado(false), 5000);
    }
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <p>¿Tenés alguna consulta? ¡Escribinos!</p>

      <form className="contacto-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}

        <input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && <span className="error">{errores.email}</span>}

        <textarea
          placeholder="Tu mensaje"
          rows="5"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        {errores.mensaje && <span className="error">{errores.mensaje}</span>}

        <button type="submit">Enviar</button>

        {enviado && <p className="exito">¡Mensaje enviado con éxito!</p>}
      </form>
    </div>
  );
};

export default Contacto;
