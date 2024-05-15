import { NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        columnGap: "1em",
        margin: "1rem 0",
      }}
    >
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? { color: "tomato" } : null)}
      >
        Inicio
      </NavLink>
      <NavLink
        to={"/products"}
        style={({ isActive }) => (isActive ? { color: "tomato" } : null)}
      >
        Productos
      </NavLink>
      <NavLink
      to={"/register"}
      style={({ isActive }) => (isActive ? { color: "tomato" } : null)}
      >
        Registrate
      </NavLink>
    </nav>
  );
}

export default Navbar;
