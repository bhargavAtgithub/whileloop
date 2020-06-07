import React from "react";

import "./menu.styles.scss";

import { Link } from "react-router-dom";

const Menu = () => (
  <div className="menu">
    <Link className="link sm regular" to="/">
      home
    </Link>
    {/* <span className="sm regular">UI/UX</span> */}
    <Link className="link sm regular" to="/web-and-mobile">
      web & mobile
    </Link>
    <Link className="link sm regular" to="/business-intelligence">
      business intelligence
    </Link>
    <Link className="link sm regular" to="/ai-and-cloud-solutions">
      AI and Cloud solutions
    </Link>
    <Link className="link sm regular" to="/contact-us">
      Contact us
    </Link>
    <Link className="link sm regular" to="/about">
      About
    </Link>
  </div>
);

export default Menu;
