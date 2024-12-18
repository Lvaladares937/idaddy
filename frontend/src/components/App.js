import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Importando a Home.js
import Perfil from "./Perfil"; // Se você já tem um componente Perfil
import "../styles/App.css";

function App() {
  return (
    <Router> {/* Envolvemos o app com o Router */}
      <Routes>
        {/* Definindo a rota para a página inicial */}
        <Route path="/" element={<Home />} /> 
        {/* Definindo a rota para os perfis das modelos */}
        <Route path="/perfil/:id" element={<Perfil />} /> 
      </Routes>
    </Router>
  );
}

export default App;
