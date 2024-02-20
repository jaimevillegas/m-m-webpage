import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Ingenieria from "./Ingenieria";
import Consultoria from "./Consultoria";
import Galeria from "./Galeria";
import Contacto from "./Contacto";
import ClientesProyectos from "./ClientesProyectos";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingenieria" element={<Ingenieria />} />
      <Route path="/consultoria" element={<Consultoria />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/clientes-proyectos" element={<ClientesProyectos />} />
    </Routes>
    // </Router>
  );
}

export default App;
