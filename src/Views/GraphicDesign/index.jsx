import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function GraphicDesign() {
  return (
    <div>
      <Link id="Adidas" to="/graphic-design/adidas">
        <img src="/logos/Adidas.png" />
      </Link>
      <Link id="Ioios" to="/graphic-design/ioios">
        <img src="/logos/Ioios.png" />
      </Link>
      <Link id="Forest-Bathing-Circle" to="/graphic-design/forest-bathing-circle">
        <img src="/logos/Forest-Bathing-Circle.png" />
      </Link>
      <Link id="Think-Out-Loud" to="/graphic-design/think-out-loud">
        <img src="/logos/Think-Out-Loud.png" />
      </Link>
    </div>
  );
}
