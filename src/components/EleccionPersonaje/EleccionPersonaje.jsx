import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { personajesBase } from './DatosPersonajes';
import Jugador from './Jugador';
import FichaPersonaje from './FichaPersonaje';
import './EleccionPersonaje.css';

const EleccionPersonaje = () => {
  const navigate = useNavigate();
  const [j1, setJ1] = useState(null);
  const [j2, setJ2] = useState(null);

  const toggleSeleccion = (p) => {
    if (j1?.id === p.id) return setJ1(null);
    if (j2?.id === p.id) return setJ2(null);
    if (!j1) return setJ1(p);
    if (!j2) return setJ2(p);
  };

  const abrirCombate = () => {
    if (j1 && j2) {
      navigate('/partida', { state: { jugador1: j1, jugador2: j2 } });
    } else {
      alert("Por favor, selecciona los personajes antes de continuar.");
    }
  };

  return (
    <div className="panelPrincipal">
      <img src="/img/java-fx-estadio-principal.png" className="estadio" alt="fondo" />
      
      <div className="vbox">
        <div className="cabecera">
          <div className="titulo">
            <h1>Batallas Pokémon</h1>
          </div>
        </div>

        <div className="zona-combate">
          {/* Reutilización del componente para J1 y J2 */}
          <Jugador personaje={j1} numeroJugador={1} />

          <button className="boton-vs" onClick={abrirCombate}>
            <img src="/img/vs-combate.png" alt="VS" />
          </button>

          <Jugador personaje={j2}numeroJugador={2} />
        </div>

        <div className="seleccion">
          {personajesBase.map((p) => (
            <FichaPersonaje 
              key={p.id}
              personaje={p}
              isSelected={j1?.id === p.id || j2?.id === p.id}
              onToggle={toggleSeleccion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EleccionPersonaje;