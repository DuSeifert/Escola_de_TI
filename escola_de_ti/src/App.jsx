import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/pages/Login";
import Cadastro from "./login/pages/Cadastro";
import GameView from "./gameview/GameView";
import TelaReview from "./review/TelaReview";
import Profile from "./profile/Profile";
import BacklogCreation from "./backlogcreation/BacklogCreation";
import DashboardLayout from "./dashboard/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/backlog" element={<BacklogCreation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/review" element={<TelaReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/gameview" element={<GameView />} />
      </Routes>
    </Router>
  );
}

export default App;