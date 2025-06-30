import React from 'react';
import { celulares } from '../data/data';
import CardCelular from '../components/CardCelular';
import './Home.css';

const destacados = celulares.slice(0, 3);

const Home = () => {
  return (
    <section className="home-section">
      <h2>Modelos Destacados</h2>
      <div className="destacados-grid">
        {destacados.map((cel) => (
          <CardCelular key={cel.id} celular={cel} />
        ))}
      </div>
    </section>
  );
};

export default Home;
