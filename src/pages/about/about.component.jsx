import React from "react";

import "./about.styles.scss";

import Introduction from "../../components/introduction/introduction.component";

import { CustomButtonAligned } from "../../components/custom-button/custom-button.component";

const About = () => (
  <div className="about">
    <Introduction title={"WHILELOOP"} tagline={"Reach the infinite."} />

    <div className="description">
      <span>
        We are bunch of developers, came together to build products that help
        busineses in increasing profits.{" "}
      </span>
      <span>
        Post COVID, many businesses are on the verge of loosing their own game.
        So, we are here grabing the opportunity to stay with those who needs
        technology in shaping their business and have a bright future
      </span>
      <div className="buttons">
        <CustomButtonAligned />
      </div>
    </div>
  </div>
);

export default About;
