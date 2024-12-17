import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      
      <header className="header">
        <div className="logo">iDaddy</div>
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

      
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Bem-vindo ao iDaddy</h1>
          <p>Modelos exclusivos para campanhas de alto nível.</p>
          <button className="btn">Explore Agora</button>
        </div>
      </section>

      
      <section className="models" id="models">
        <h2>Nossas Modelos</h2>
        <div className="model-grid">
          
          <div className="model-card">
            <div className="placeholder-image">Imagem 1</div>
            <h3>Modelo 1</h3>
          </div>
          
          <div className="model-card">
            <div className="placeholder-image">Imagem 2</div>
            <h3>Modelo 2</h3>
          </div>
          
          <div className="model-card">
            <div className="placeholder-image">Imagem 3</div>
            <h3>Modelo 3</h3>
          </div>
          
          <div className="model-card">
            <div className="placeholder-image">Imagem 4</div>
            <h3>Modelo 4</h3>
          </div>
        </div>
      </section>

      
      <section className="services" id="services">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Fotografia Profissional</h3>
            <p>Serviços de fotografia de alta qualidade para sua campanha.</p>
          </div>
          <div className="service-card">
            <h3>Modelos Exclusivos</h3>
            <p>Seleção de modelos preparados para campanhas premium.</p>
          </div>
          <div className="service-card">
            <h3>Gerenciamento de Campanha</h3>
            <p>Planejamento e execução de campanhas publicitárias.</p>
          </div>
        </div>
      </section>

      
      <section className="contact" id="contact">
        <h2>Entre em Contato</h2>
        <p>
          Quer saber mais sobre nossos serviços? Envie-nos uma mensagem!
        </p>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Seu nome"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Seu email"
            className="form-input"
            required
          />
          <textarea
            placeholder="Sua mensagem"
            className="form-textarea"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="btn">
            Enviar Mensagem
          </button>
        </form>
      </section>

      
      <footer className="footer">
        <p>&copy; 2024 iDaddy. Todos os direitos reservados.</p>
        <p>
          Contato: <a href="mailto:contato@idaddy.com">contato@idaddy.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
