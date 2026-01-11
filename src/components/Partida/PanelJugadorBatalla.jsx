import BarraVida from './BarraVida';

const PanelJugadorBatalla = ({ jugador, vidas, statSuerteTotal, esEspejo, alineacionVida }) => (
  <div className="columna-jugador">
    <BarraVida vidas={vidas} alineacion={alineacionVida} />
    
    <img 
      src={jugador.img} 
      className={`img-batalla ${esEspejo ? 'espejo' : ''}`} 
      alt={jugador.nombre} 
    />
    
    <div className="stats-suerte-panel">Stat suerte: {statSuerteTotal}</div>
    
    <textarea 
      className="stats-base-area" 
      readOnly 
      value={`Nombre: ${jugador.nombre}\nAtaque: ${jugador.ataque}\nDefensa: ${jugador.defensa}\nVelocidad: ${jugador.velocidad}`} 
    />
  </div>
);

export default PanelJugadorBatalla;