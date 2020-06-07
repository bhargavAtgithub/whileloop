import React from "react";
import logo from "../../whileloop.png";

import "./nav-bar.styles.scss";

import Menu from "../menu/menu.component";
import MediaList from "../../components/media-list/media-list.component";

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <img src={logo} alt="logo" height="70px" />
    </div>
    <div className="navlinks">
      <Menu />
      <MediaList />
    </div>
  </div>
);

export default Navbar;
