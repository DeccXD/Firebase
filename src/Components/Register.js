// src/Components/Register.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Register = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado:", result.user);
      onSwitchToLogin(); // Cambiar a la vista de inicio de sesión
    } catch (error) {
      console.error("Error al registrar:", error.message);
    }
  };

  return (
    <div className="register-container">
      <h1>Regístrate</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Crear cuenta</button>
      </form>
      <p>
        ¿Ya tienes una cuenta?{" "}
        <span className="link" onClick={onSwitchToLogin}>
          Inicia sesión
        </span>
      </p>
    </div>
  );
};

export default Register;
