import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/ux-ui">UX UI</NavLink>
      <NavLink to="/graphic-design">Graphic Design</NavLink>
      <NavLink to="/photography">Photography</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  );
}
