import React from "react";

import "./introduction.styles.scss";

const Introduction = ({ title, tagline }) => (
  <div className="introduction">
    <h1 className="xl">{title}</h1>
    <div className="tagline">
      <span className="md">{tagline}</span>
    </div>
  </div>
);

export default Introduction;
