// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Importando a configuração do i18next
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import './styles/App.css';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;