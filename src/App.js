import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EleccionPersonaje from './components/EleccionPersonaje/EleccionPersonaje';
import Partida from './components/Partida/Partida'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Pantalla inicial */}
        <Route path="/" element={<EleccionPersonaje />} />
        {/* Pantalla de combate */}
        <Route path="/partida" element={<Partida />} />
      </Routes>
    </Router>
  );
}

export default App;