const Controles = ({ 
  suerteJ1, suerteJ2, statCombate, fase, 
  onCombatir, onResolver, onReiniciar, onSalir 
}) => (
  <div className="columna-jugador">
    <div className="dado-container">
      <img src="/img/javafx-dado.png" width="70" alt="dado" />
      <div className="stats-suerte-panel">{suerteJ1} - {suerteJ2}</div>
      <img src="/img/javafx-dado.png" width="70" alt="dado" />
    </div>

    <div className="stats-suerte-panel combate-label">Combate por: {statCombate}</div>

    <div className="controles-batalla">
      <button className="boton-partida" onClick={onCombatir} disabled={fase !== "COMBATIR"}>
        Combatir
      </button>
      <button className="boton-partida" onClick={onResolver} disabled={fase !== "RESOLUCION"}>
        Resolución
      </button>
      <button className="boton-partida" onClick={onReiniciar} disabled={fase !== "TERMINADO"}>
        Nuevo Combate
      </button>
      <button className="boton-partida" onClick={onSalir}>
        Elegir otro Personaje
      </button>
    </div>
  </div>
);

export default Controles;