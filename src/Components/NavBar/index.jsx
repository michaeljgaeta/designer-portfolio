import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-right">
        <div>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/ux-ui">
            UX UI
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/graphic-design">
            Graphic Design
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/photography">
            Photography
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/contacts">
            Contacts
          </NavLink>
        </div>
      </div>
    </div>
  );
}
