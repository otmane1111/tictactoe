
// src/pages/index.js

import React from "react";
import LoginForm from "../components/LoginForm";
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
        </ul>
      </nav>
      <section id="home" className="home-section">
        <div className="welcome-text">
          <h2>Welcome to Tic-Tac-Toe!</h2>
          <p>
            Tic-Tac-Toe, or Morpion, is a classic two-player game played on a 3x3 grid. Players take turns placing their symbols (usually "X" or "O") on the board with the aim of forming a line of three of their symbols either horizontally, vertically, or diagonally.
          </p>
          <h3>How to Play:</h3>
          <ul>
            <li><strong>Game Board:</strong> Start with an empty 3x3 grid.</li>
            <li><strong>Turns:</strong> Players alternate turns placing their symbols on empty spaces.</li>
            <li><strong>Objective:</strong> Form a line of three identical symbols.</li>
            <li><strong>Winning:</strong> The first player to achieve a line wins the game!</li>
            <li><strong>Draw:</strong> If the board is filled and no player has a line, the game is a draw.</li>
          </ul>
        </div>
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
    </div>
  );
};

export default IndexPage