import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ingenieria from "./Ingenieria";
import Consultoria from "./Consultoria";
import Galeria from "./Galeria";
import Contacto from "./Contacto";
import ClientesProyectos from "./ClientesProyectos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingenieria" element={<Ingenieria />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/clientes-proyectos" element={<ClientesProyectos />} />
      </Routes>
    </Router>
  );
}

export default App;
