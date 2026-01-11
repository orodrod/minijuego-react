const BarraVida = ({ vidas, alineacion }) => (
  <div className={`barra-vida ${alineacion}`}>
    {[1, 2, 3].map(i => (
      <img 
        key={i} 
        src="/img/javafx-vida.png" 
        className={`corazon-vida ${vidas < i ? 'corazon-oculto' : ''}`} 
        alt="vida" 
      />
    ))}
  </div>
);

export default BarraVida;