import React from "react";

import "./homepage.styles.scss";
import { motion } from "framer-motion";
import {
  pageTransitions,
  pageVarients,
  pageStyle,
} from "../../pageTransitions";

import Introduction from "../../components/introduction/introduction.component";
import { CustomButtonAligned } from "../../components/custom-button/custom-button.component";

const Homepage = () => {
  const names = ["Contact us", "About us"],
    links = ["/contact-us", "/about-us"];
  return (
    <motion.div
      className="homepage"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVarients}
      transition={pageTransitions}
      style={pageStyle}
    >
      <Introduction
        title={"Hello, World!"}
        tagline={
          "Let's blend technology into your business to step up the game."
        }
      />
      <span className="xs op1">
        <i>We are still in production. Thanks for stoping by.</i>
      </span>
      <div className="description">
        <span className="sm op2">
          We build Web and Mobile applications, provide analytics and business
          intelligence, AI and Cloud solutions.
        </span>
        <div className="buttons">
          <CustomButtonAligned names={names} links={links} />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
