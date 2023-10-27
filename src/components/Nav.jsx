import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/projects">
        <li>Projets</li>
      </NavLink>
      <NavLink to="contact">
        <li>Contact</li>
      </NavLink>
    </ul>
  );
}

export default Nav;
