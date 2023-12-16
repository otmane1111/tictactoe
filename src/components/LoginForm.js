// src/components/LoginForm.js

import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import TicTacToeGame from "./TicTacToeGame"; // Importez le composant du jeu

import "../pages/styles.css";

const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState(null); // Nouvel état pour stocker l'email de l'utilisateur

  const handleLogin = async () => {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Enregistrez des informations supplémentaires dans la base de données Firebase
      const database = getDatabase();
      const userRef = ref(database, `users/${user.uid}`);
      set(userRef, {
        email: user.email,
        // Ajoutez d'autres informations que vous souhaitez stocker
      });

      console.log("User successfully logged in:", user);

      setUserEmail(user.email); // Met à jour l'état avec l'email de l'utilisateur
      setLoggedIn(true); // Met à jour l'état pour indiquer que l'utilisateur est connecté
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <section>
      {loggedIn ? (
        <div>
          <p>Welcome, {userEmail}!</p>
          <TicTacToeGame />
        </div>
      ) : (
        <div className="form-box">
          <div className="form-value">
            <form>
              <h2>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required id="emailInput" />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required id="passwordInput" />
                <label>Password</label>
              </div>
              <div className="forget">
                <label>
                  <input type="checkbox" id="rememberMeCheckbox" />
                  Remember Me
                </label>
                <a href="#" onClick={() => setShowSignUp(true)}>
                  Forgot Password
                </a>
              </div>
              <button type="button" onClick={handleLogin}>
                Log In
              </button>
            </form>
            {showSignUp && (
              <div>
                {/* Ajoutez ici votre formulaire d'inscription */}
                <p>Sign Up Form</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginForm;
