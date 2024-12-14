// Importando as bibliotecas necessárias
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importando o arquivo de estilos
import App from '/App'; // Importando o componente principal
import reportWebVitals from './reportWebVitals'; // Para medir o desempenho

// Renderizando o componente App dentro do elemento com id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Medindo o desempenho da aplicação
reportWebVitals();