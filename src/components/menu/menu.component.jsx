import React from "react";

import "./menu.styles.scss";

import { Link } from "react-router-dom";

const Menu = () => (
  <div className="menu">
    <Link className="link sm regular hoverlink" to="/">
      home
    </Link>
    {/* <span className="sm regular">UI/UX</span> */}
    <Link className="link sm regular hoverlink" to="/web-and-mobile">
      web & mobile
    </Link>
    <Link className="link sm regular hoverlink" to="/business-intelligence">
      business intelligence
    </Link>
    <Link className="link sm regular hoverlink" to="/ai-and-cloud-solutions">
      AI and Cloud solutions
    </Link>
    <Link className="link sm regular hoverlink" to="/contact-us">
      Contact us
    </Link>
    <Link className="link sm regular hoverlink" to="/about">
      About
    </Link>
  </div>
);

export default Menu;
