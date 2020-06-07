import React from "react";

import "./homepage.styles.scss";

import Introduction from "../../components/introduction/introduction.component";
import { CustomButtonAligned } from "../../components/custom-button/custom-button.component";

import {
  CustomButtonFilled,
  CustomButtonBorder,
} from "../../components/custom-button/custom-button.component";

const Homepage = () => (
  <div className="homepage">
    <Introduction
      title={"Hello, World!"}
      tagline={"Let's blend technology into your business to step up the game."}
    />
    <div className="description">
      <span className="sm op2">
        We build Web and Mobile applications, provide analytics and business
        intelligence, AI and Cloud solutions.
      </span>
      <div className="buttons">
        <CustomButtonAligned />
      </div>
    </div>
  </div>
);

export default Homepage;
