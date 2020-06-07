import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/nav-bar/nav-bar.component";
import Homepage from "./pages/homepage/homepage.component";
import WebAndMobile from "./pages/web-and-mobile/web-and-mobile.component";
import BusinessIntelligence from "./pages/business-intelligence/business-intelligence.component";
import AiAndCloudSolutions from "./pages/ai-and-cloud-solutions/ai-and-cloud-solutions.component";
import About from "./pages/about/about.component";

import { LargeBottomText } from "./components/style-components/style-components.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LargeBottomText />

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/web-and-mobile" component={WebAndMobile} />
        <Route path="/business-intelligence" component={BusinessIntelligence} />
        <Route path="/ai-and-cloud-solutions" component={AiAndCloudSolutions}/>
        <Route path="/" component={Homepage} />
        
      </Switch>
    </div>
  );
}

export default App;
