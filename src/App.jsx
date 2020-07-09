import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Views/Home";
import About from "./Views/About";

import UXUI from "./Views/UXUI";
import Getbus from "./Views/UXUI/Getbus";
import Couchwood from "./Views/UXUI/Couchwood";
import HBO from "./Views/UXUI/HBO";
import Tiffin from "./Views/UXUI/Tiffin";

import GraphicDesign from "./Views/GraphicDesign";
import Adidas from "./Views/GraphicDesign/Adidas";
import Loios from "./Views/GraphicDesign/Loios";
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
            <Route component={Getbus} exact path="/ux-ui/ux-ui-1" />
            <Route component={Couchwood} exact path="/ux-ui/ux-ui-2" />
            <Route component={HBO} exact path="/ux-ui/ux-ui-3" />
            <Route component={Tiffin} exact path="/ux-ui/ux-ui-4" />

            <Route component={GraphicDesign} exact path="/graphic-design" />
            <Route component={Adidas} exact path="/graphic-design/adidas" />
            <Route component={Loios} exact path="/graphic-design/loios" />
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
