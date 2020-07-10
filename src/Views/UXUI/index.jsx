import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function UXUI() {
  return (
    <div clasName="cyan-background">
      <div className="ux-ui">
        <div>
          <Link to="/ux-ui/getbus">
            <img src="/logos/Getbus.png" alt="getbus" />
          </Link>
        </div>
        <div>
          <Link to="/ux-ui/couchwood">
            <img src="/logos/Couchwood.png" alt="couchwood" />
          </Link>
        </div>
        <div>
          <Link to="/ux-ui/hbo">
            <img src="/logos/HBO.png" alt="hbo" />
          </Link>
        </div>
        <div>
          <Link to="/ux-ui/tiffin">
            <img src="/logos/Tiffin.png" alt="tiffin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
