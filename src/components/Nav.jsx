import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const setActive = ({ isActive }) =>
    isActive ? "nav-link nav-active" : "nav-link";

  return (
    <ul className="block-nav">
      <NavLink to="/" className={setActive}>
        <li>Home</li>
      </NavLink>
      <NavLink to="/projects" className={setActive}>
        <li>Projets</li>
      </NavLink>
      <NavLink to="contact" className={setActive}>
        <li>Contact</li>
      </NavLink>
    </ul>
  );
}

export default Nav;
