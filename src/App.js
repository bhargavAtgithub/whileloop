import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/nav-bar/nav-bar.component";
import Homepage from "./pages/homepage/homepage.component";
import WebAndMobile from "./pages/web-and-mobile/web-and-mobile.component";
import BusinessIntelligence from "./pages/business-intelligence/business-intelligence.component";
import AiAndCloudSolutions from "./pages/ai-and-cloud-solutions/ai-and-cloud-solutions.component";
import ContactUs from "./pages/contact-us/contact-us.component";
import About from "./pages/about/about.component";

import { LargeBottomText } from "./components/style-components/style-components.component";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <main style={{ overflow: "hidden", position: "relative" }}>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/about" component={About} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/web-and-mobile" component={WebAndMobile} />
            <Route
              path="/business-intelligence"
              component={BusinessIntelligence}
            />
            <Route
              path="/ai-and-cloud-solutions"
              component={AiAndCloudSolutions}
            />
            <Route path="/" component={Homepage} />
          </Switch>
        </AnimatePresence>
      </main>
      <LargeBottomText />
    </div>
  );
}

export default App;
