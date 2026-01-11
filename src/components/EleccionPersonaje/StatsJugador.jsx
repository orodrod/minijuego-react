const StatsJugador = ({ personaje }) => (
  <div className="stats-area">
    Nombre: {personaje.nombre} <br />
    Ataque: {personaje.ataque} <br /> 
    Defensa: {personaje.defensa} <br />
    Velocidad: {personaje.velocidad}
  </div>
);

export default StatsJugador;