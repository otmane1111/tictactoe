// src/pages/index.js

import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm"; // Importez le composant SignUp ici
// import "./styles.css"; // Importez le fichier CSS ici

const IndexPage = () => {
  return (
    <div className="main-container">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login">Log In</a></li>
          <li><a href="#signup">Sign Up</a></li> {/* Ajoutez le lien vers la section d'inscription */}
        </ul>
      </nav>
      <section id="home" className="home-section">
        {/* Contenu de la section Home */}
      </section>
      <section id="about">
        {/* Contenu de la section About */}
      </section>
      <section id="services">
        {/* Contenu de la section Services */}
      </section>
      <section id="contact">
        {/* Contenu de la section Contact */}
      </section>
      <section id="login">
        <LoginForm />
      </section>
      <section id="signup">
        <SignUpForm />
      </section>
    </div>
  );
};

export default IndexPage;
