import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function NavBar() {
  return (
    <>
      <div class="circle"></div>

      <div className="navbar">
        <div className="logo-left">
          <NavLink to="/">Home</NavLink>
        </div>

        <ul className="nav-right">
          <li className="navlink" id="about">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navlink" id="uxui">
            <NavLink to="/ux-ui">UX UI</NavLink>
          </li>
          <li className="navlink" id="graphicdesign">
            <NavLink to="/graphic-design">Graphic Design</NavLink>
          </li>
          <li className="navlink" id="photography">
            <NavLink to="/photography">Photography</NavLink>
          </li>
          <li id="socialicons">
            <a href="https://www.instagram.com" target="blank">
              <img src="icons/instagram.svg" width="20px" alt="twitter-icon" />
            </a>
            <a href="https://www.facebook.com" target="blank">
              <img src="icons/facebook.svg" width="20px" alt="facebook-icon" />
            </a>
            <a href="https://www.linkedin.com" target="blank">
              <img src="icons/linkedin.svg" width="20px" alt="linkedin-icon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
