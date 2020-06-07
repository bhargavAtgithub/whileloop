import React from "react";

import "./business-intelligence.styles.scss";
import {
  pageTransitions,
  pageVarients,
  pageStyle,
} from "../../pageTransitions";

import Team from "../team/team.component";
import { motion } from "framer-motion";

const BusinessIntelligence = () => {
  const introduction = [
    "Business Intelligence",
    "We are creative, and dedicated team of data science enthusiasts who are eager to understand your data better and help you make informed decisions.",
  ];
  const profiles = [
    {
      analysts: [
        [
          "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png",
          "Albert",
          "A genius",
        ],
        [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfYgZ3j9n7FXVkJp7AnDVq2azKmb-SrY_wx8AIYpaoimVBAGpO&usqp=CAU",
          "Einstein",
          "Another geek",
        ],
        [
          "https://cdn.dribbble.com/users/40756/screenshots/6232646/side-profile-woman_2x.png",
          "Jackson",
          "An analyst with 3yrs exp.",
        ],
      ],
    },
  ];
  return (
    <motion.div
      className="businessintelligence"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVarients}
      transition={pageTransitions}
      style={pageStyle}
    >
      <Team introduction={introduction} departments={profiles} />
    </motion.div>
  );
};

export default BusinessIntelligence;
