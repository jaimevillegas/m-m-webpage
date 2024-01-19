import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ingenieria from "./Ingenieria";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingenieria" element={<Ingenieria />} />
      </Routes>
    </Router>
  );
}

export default App;
