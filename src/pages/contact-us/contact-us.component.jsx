import React from "react";

import "./contact-us.styles.scss";
import { motion } from "framer-motion";
import {
  pageTransitions,
  pageVarients,
  pageStyle,
} from "../../pageTransitions";

import Introduction from "../../components/introduction/introduction.component";
import GetInTouch from "../get-in-touch/get-in-touch.component";

const ContactUs = () => (
  <motion.div
    className="contactus"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVarients}
    transition={pageTransitions}
    style={pageStyle}
  >
    <div className="contactdetails">
      <Introduction
        title={"Want to hire us?"}
        tagline={"We are excited to work with you."}
      />
      <div className="details">
        <div className="contact">
          <span className="xs regular">Mail us at</span>
          <span className="sm medium">itswhileloop@gmail.com</span>
        </div>
        <div className="contact">
          <span className="xs regular">Call us at</span>
          <span className="sm medium">+91 9948895667</span>
        </div>
        <div className="contact">
          <span className="xs regular">Connect on</span>
          <div className="media">
            <a
              className="sm regular"
              href="https://www.linkedin.com/in/whileloop-innovations"
              target="blank"
            >
              linkedin
            </a>
            <a
              className="sm regular"
              href="https://www.facebook.com/whileloop.innovations.5"
              target="blank"
            >
              Facebook
            </a>
            <a
              className="sm regular"
              href="https://www.facebook.com/whileloop.innovations.5"
              target="blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="form-input">
      <h3>Get in touch</h3>
      <GetInTouch />
    </div>
  </motion.div>
);

export default ContactUs;
