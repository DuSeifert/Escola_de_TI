import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/pages/Login";
import Cadastro from "./login/pages/Cadastro";
import GameView from "./gameview/GameView";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define que ao abrir o site (/) ele vai direto para o Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/gameview" element={<GameView />} />
      </Routes>
    </Router>
  );
}

export default App;