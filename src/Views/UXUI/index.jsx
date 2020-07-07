import React from 'react'
import { Link } from "react-router-dom";
import "./index.css"

export default function UXUI() {
  return (
    <div className="list">
      <Link to="/ux-ui/ux-ui-1">UXUI1</Link>
      <Link to="/ux-ui/ux-ui-2">UXUI2</Link>
      <Link to="/ux-ui/ux-ui-3">UXUI3</Link>
      <Link to="/ux-ui/ux-ui-4">UXUI4</Link>
    </div>
  )
}
