import React from "react";
import "./index.css";

export default function About() {
  return (
    <div clasName="cyan-background">
      <div className="main-container">
        <div className="sub-container">
          <div className="sub-container">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            </p>
          </div>
        </div>
        <div className="sub-container">
          <img src="/photos/frederico-headshot.png" alt="designer-headshot" />
        </div>
      </div>
    </div>
  );
}
