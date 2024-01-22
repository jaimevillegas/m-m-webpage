import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ingenieria from "./Ingenieria";
import Consultoria from "./Consultoria";
import HeroServices from "./HeroServices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingenieria" element={<Ingenieria />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/hero-services" element={<HeroServices />} />
      </Routes>
    </Router>
  );
}

export default App;
