import React from "react";
import logo from "../../whileloop.png";

import "./nav-bar.styles.scss";

import Menu from "../menu/menu.component";

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <img src={logo} alt="logo" height="100px" />
    </div>
    <Menu />
  </div>
);

export default Navbar;
