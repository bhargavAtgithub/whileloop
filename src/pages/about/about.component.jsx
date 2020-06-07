import React from "react";

import "./about.styles.scss";
import { motion } from "framer-motion";
import {
  pageTransitions,
  pageVarients,
  pageStyle,
} from "../../pageTransitions";

import Introduction from "../../components/introduction/introduction.component";

import { CustomButtonAligned } from "../../components/custom-button/custom-button.component";

const About = () => (
  <motion.div
    className="about"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVarients}
    transition={pageTransitions}
    style={pageStyle}
  >
    <Introduction title={"WHILELOOP"} tagline={"Reach the infinite."} />

    <div className="description">
      <span>
        We are bunch of developers, came together to build products that help
        busineses in increasing profits.
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
  </motion.div>
);

export default About;
