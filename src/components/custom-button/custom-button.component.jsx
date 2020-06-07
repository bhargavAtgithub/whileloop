import React from "react";

import "./custom-button.styles.scss";

export const CustomButtonFilled = () => (
  <div className="filled">
    <button className="button bold xs">Get In Touch</button>
  </div>
);

export const CustomButtonBorder = () => (
  <div className="border">
    <button className="button bold xs">About-us</button>
  </div>
);

export const CustomButtonAligned = () => (
  <div className="alignedbuttons">
    <CustomButtonFilled />
    <CustomButtonBorder />
  </div>
);
