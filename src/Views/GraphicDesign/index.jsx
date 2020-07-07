import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

export default function GraphicDesign() {
  return (
    <div className="list">
      <Link to="/graphic-design/adidas">Adidas</Link>
      <Link to="/graphic-design/ioios">Ioios</Link>
      <Link to="/graphic-design/forest-bathing-circle">Forest Bathing Circle</Link>
      <Link to="/graphic-design/think-out-loud">Think Out Loud</Link>
    </div>
  );
}
