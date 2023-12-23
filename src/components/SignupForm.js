import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import "../pages/styles.css"; // Import your existing styles

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // You can perform additional actions here, such as storing user data in the database
      // For example, you can use the Realtime Database
      // const db = getDatabase();
      // set(ref(db, `users/${user.uid}`), {
      //   email: user.email,
      //   uid: user.uid,
      // });

      console.log("User signed up:", user);
    } catch (error) {
      setError(error.message);
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="signup-form-container"> {/* Add a container div for styling */}
      <form onSubmit={handleSubmit} className="signup-form">
        {/* Your form input fields go here */}
        <div className="inputbox">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputbox">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default SignupForm;
