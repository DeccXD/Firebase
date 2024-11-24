
import React from "react";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <h1>Bienvenido, {user.displayName || user.email}</h1>
      <img src={user.photoURL || "https://via.placeholder.com/150"} alt="Avatar del usuario" />
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
