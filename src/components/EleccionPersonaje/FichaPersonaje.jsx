const FichaPersonaje = ({ personaje, isSelected, onToggle }) => (
  <div 
    className={`panel-personaje ${isSelected ? 'selected' : ''}`}
    onClick={() => onToggle(personaje)}
  >
    <img src={personaje.fondo} className="personaje-bg" alt="tipo" />
    <img src={personaje.img} className="imagen-personaje" alt={personaje.nombre} />
  </div>
);

export default FichaPersonaje;