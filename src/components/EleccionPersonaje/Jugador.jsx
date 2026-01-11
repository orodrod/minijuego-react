import StatsJugador from './StatsJugador.jsx';

const Jugador = ({ personaje, numeroJugador }) => {
  if (!personaje) return <div className="jugador" />;

  return (
    <div className="jugador">
      <img 
        src={personaje.img} 
        className={`img-j${numeroJugador}`} 
        alt={`jugador${numeroJugador}`} 
      />
      <StatsJugador personaje={personaje} />
    </div>
  );
};

export default Jugador;