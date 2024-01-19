import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ingenieria from "./Ingenieria";
import Consultoria from "./Consultoria";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingenieria" element={<Ingenieria />} />
        <Route path="/consultoria" element={<Consultoria />} />
      </Routes>
    </Router>
  );
}

export default App;
