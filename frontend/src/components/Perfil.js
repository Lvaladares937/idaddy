import React from "react";
import { Link } from "react-router-dom";
import "../styles/Perfil.css";

function Perfil() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <Link to="/" className="logo">
          iDaddy
        </Link>
        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#models" className="nav-link">
            Modelos
          </a>
          <a href="#services" className="nav-link">
            Serviços
          </a>
          <a href="#contact" className="nav-link">
            Contato
          </a>
        </nav>
      </header>

      {/* Conteúdo do Perfil */}
      <div className="perfil-container">
        <div className="perfil-card">
          {/* Foto Principal */}
          <div className="perfil-header">
            <img
              className="perfil-main-photo"
              src="https://via.placeholder.com/600x400"
              alt="Modelo Destaque"
            />
          </div>

          {/* Galeria de Fotos */}
          <div className="perfil-gallery">
            <img
              className="perfil-small-photo"
              src="https://via.placeholder.com/300x200?text=Foto+1"
              alt="Foto 1"
            />
            <img
              className="perfil-small-photo"
              src="https://via.placeholder.com/300x200?text=Foto+2"
              alt="Foto 2"
            />
            <img
              className="perfil-small-photo"
              src="https://via.placeholder.com/300x200?text=Foto+3"
              alt="Foto 3"
            />
          </div>

          {/* Informações da Modelo */}
          <div className="perfil-details">
            <h1 className="perfil-name">Nome da Modelo</h1>
            <p className="perfil-info">
              <strong>Idade:</strong> 25 anos
            </p>
            <p className="perfil-info">
              <strong>Local de Atendimento:</strong> São Paulo, SP
            </p>

            {/* Botões de Contato */}
            <a href="tel:+5511999999999" className="perfil-button call-button">
              Ligar para a Modelo
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="perfil-button whatsapp-button"
            >
              Conversar no WhatsApp
            </a>
          </div>

          {/* Vídeo da Modelo */}
          <div className="perfil-video">
            <h2 className="perfil-video-title">Apresentação em Vídeo</h2>
            <video controls className="perfil-video-player">
              <source
                src="https://via.placeholder.com/placeholder.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
