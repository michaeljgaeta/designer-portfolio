import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function GraphicDesign() {
  return (
    <div className="graphic-design">
      <div className="logos-container">
        <Link id="Adidas" to="/graphic-design/adidas">
          <img src="/logos/Adidas.png" alt="adidas-logo" />
        </Link>
        <Link id="Ioios" to="/graphic-design/ioios">
          <img src="/logos/Ioios.png" alt="ioios-logo" />
        </Link>
      </div>
      <div className="logos-container">
        <Link id="Forest-Bathing-Circle" to="/graphic-design/forest-bathing-circle">
          <img src="/logos/Forest-Bathing-Circle.png" alt="forest-bathing-circle-logo" />
        </Link>
        <Link id="Think-Out-Loud" to="/graphic-design/think-out-loud">
          <img src="/logos/Think-Out-Loud.png" alt="think-out-loud-logo" />
        </Link>
      </div>
    </div>
  );
}
