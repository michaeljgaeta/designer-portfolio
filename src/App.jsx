import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Views/Home";
import About from "./Views/About";

import UXUI from "./Views/UXUI";
import UXUI1 from "./Views/UXUI/UXUI1";
import UXUI2 from "./Views/UXUI/UXUI2";
import UXUI3 from "./Views/UXUI/UXUI3";
import UXUI4 from "./Views/UXUI/UXUI4";

import GraphicDesign from "./Views/GraphicDesign";
import Adidas from "./Views/GraphicDesign/Adidas";
import Ioios from "./Views/GraphicDesign/Ioios";
import ForestBathing from "./Views/GraphicDesign/ForestBathing";
import ThinkLoud from "./Views/GraphicDesign/ThinkLoud";

import Photography from "./Views/Photography";

import "./index.css";

function App() {
  return (
    //set background image
    <div className={<Route exact path="/" /> ? "surf-background" : "white-background"}>
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={About} exact path="/about" />

            <Route component={UXUI} exact path="/ux-ui" />
            <Route component={UXUI1} exact path="/ux-ui/ux-ui-1" />
            <Route component={UXUI2} exact path="/ux-ui/ux-ui-2" />
            <Route component={UXUI3} exact path="/ux-ui/ux-ui-3" />
            <Route component={UXUI4} exact path="/ux-ui/ux-ui-4" />

            <Route component={GraphicDesign} exact path="/graphic-design" />
            <Route component={Adidas} exact path="/graphic-design/adidas" />
            <Route component={Ioios} exact path="/graphic-design/ioios" />
            <Route component={ForestBathing} exact path="/graphic-design/forest-bathing-circle" />
            <Route component={ThinkLoud} exact path="/graphic-design/think-out-loud" />

            <Route component={Photography} exact path="/photography" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
