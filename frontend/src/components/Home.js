import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";


function Home() {

  const models = [
    { id: 1, name: "Modelo 1" },
    { id: 2, name: "Modelo 2" },
    { id: 3, name: "Modelo 3" },
    { id: 4, name: "Modelo 4" },
    { id: 5, name: "Modelo 5" },
    { id: 6, name: "Modelo 6" },
    { id: 7, name: "Modelo 7" },
    { id: 8, name: "Modelo 8" },
    { id: 9, name: "Modelo 9" },
    { id: 10, name: "Modelo 10" },
    { id: 11, name: "Modelo 11" },
    { id: 12, name: "Modelo 12" },
    { id: 13, name: "Modelo 13" },
    { id: 14, name: "Modelo 14" },
    { id: 15, name: "Modelo 15" },
    { id: 16, name: "Modelo 16" },
    { id: 17, name: "Modelo 17" },
    { id: 18, name: "Modelo 18" },
    { id: 19, name: "Modelo 19" },
    { id: 20, name: "Modelo 20" },
    { id: 21, name: "Modelo 21" },
    { id: 22, name: "Modelo 22" },
    { id: 23, name: "Modelo 23" },
    { id: 24, name: "Modelo 24" },
    { id: 25, name: "Modelo 25" },
    { id: 26, name: "Modelo 26" },
    { id: 27, name: "Modelo 27" },
    { id: 28, name: "Modelo 28" },
    { id: 29, name: "Modelo 29" },
    { id: 30, name: "Modelo 30" },

    // Adicione mais modelos conforme necessário
  ];

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
          <p>Acompanhantes exclusivas para você de alto nível.</p>
          <button className="btn">Conheça Mais</button>
        </div>
      </section>

      
      <section className="models" id="models">
        <h2>Nossas Modelos</h2>
        
        <div className="model-grid">
          
          {models.map((model => (
            <div className="model-card" key={model.id}>
            <Link to={`/perfil/${model.id}`}>
            <div className="placeholder-image">{`Imagem ${model.id}`}</div>
            </Link>
            <h3>{model.name}</h3>
            </div>
          )))}
          
          

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

export default Home;