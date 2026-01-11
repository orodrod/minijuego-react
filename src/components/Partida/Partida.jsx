import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PanelJugadorBatalla from './PanelJugadorBatalla';
import Controles from './Controles';
import './Partida.css';

const Partida = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { jugador1, jugador2 } = location.state || {};

  const [fondo, setFondo] = useState("");
  const [vidasJ1, setVidasJ1] = useState(3);
  const [vidasJ2, setVidasJ2] = useState(3);
  const [suerteJ1, setSuerteJ1] = useState(0);
  const [suerteJ2, setSuerteJ2] = useState(0);
  const [statCombate, setStatCombate] = useState("- - -");
  const [statSuerteTotalJ1, setStatSuerteTotalJ1] = useState("- - -");
  const [statSuerteTotalJ2, setStatSuerteTotalJ2] = useState("- - -");
  const [fase, setFase] = useState("COMBATIR");

  useEffect(() => {
    const fondos = [
      "/img/javafx-arena-planta.png", "/img/javafx-arena-roca.png",
      "/img/javafx-arena-normal.png", "/img/javafx-arena-hielo.png",
      "/img/javafx-arena-fuego.png"
    ];
    setFondo(fondos[Math.floor(Math.random() * fondos.length)]);
  }, []);

  if (!jugador1 || !jugador2) return <button onClick={() => navigate('/')}>Error: Volver</button>;

  const manejarCombatir = () => {
    const statsPosibles = ["Ataque", "Defensa", "Velocidad"];
    const elegido = statsPosibles[Math.floor(Math.random() * statsPosibles.length)];
    const s1 = Math.floor(Math.random() * 101);
    const s2 = Math.floor(Math.random() * 101);

    setStatCombate(elegido);
    setSuerteJ1(s1);
    setSuerteJ2(s2);
    setStatSuerteTotalJ1(jugador1[elegido.toLowerCase()] + s1);
    setStatSuerteTotalJ2(jugador2[elegido.toLowerCase()] + s2);
    setFase("RESOLUCION");
  };

  const manejarResolver = () => {
    let nV1 = vidasJ1;
    let nV2 = vidasJ2;

    if (statSuerteTotalJ1 > statSuerteTotalJ2) nV2--;
    else if (statSuerteTotalJ2 > statSuerteTotalJ1) nV1--;

    setVidasJ1(nV1);
    setVidasJ2(nV2);
    setFase(nV1 <= 0 || nV2 <= 0 ? "TERMINADO" : "COMBATIR");
  };

  const reiniciar = () => {
    setVidasJ1(3); setVidasJ2(3);
    setSuerteJ1(0); setSuerteJ2(0);
    setStatCombate("- - -");
    setStatSuerteTotalJ1("- - -"); setStatSuerteTotalJ2("- - -");
    setFase("COMBATIR");
  };

  return (
    <div className="partida-container">
      <img src={fondo} className="fondo-batalla" alt="campo" />
      <div className="diseño-partida">
        
        <PanelJugadorBatalla 
          jugador={jugador1} 
          vidas={vidasJ1} 
          statSuerteTotal={statSuerteTotalJ1} 
          esEspejo={true} 
          alineacionVida="vida-j1"
        />

        <Controles 
          suerteJ1={suerteJ1}
          suerteJ2={suerteJ2}
          statCombate={statCombate}
          fase={fase}
          onCombatir={manejarCombatir}
          onResolver={manejarResolver}
          onReiniciar={reiniciar}
          onSalir={() => navigate('/')}
        />

        <PanelJugadorBatalla 
          jugador={jugador2} 
          vidas={vidasJ2} 
          statSuerteTotal={statSuerteTotalJ2} 
          esEspejo={false} 
          alineacionVida="vida-j2"
        />

      </div>
    </div>
  );
};

export default Partida;