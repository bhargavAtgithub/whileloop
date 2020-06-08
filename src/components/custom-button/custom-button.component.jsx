import React from "react";

import "./custom-button.styles.scss";
import { Link } from "react-router-dom";

export const CustomButtonFilled = ({ name, link }) => (
  <div className="filled">
    <Link to={link}>
      <button className="button bold xs">{name}</button>
    </Link>
  </div>
);

export const CustomButtonBorder = ({ name, link }) => (
  <div className="border">
    <Link to={link}>
      <button className="button bold xs">{name}</button>
    </Link>
  </div>
);

export const CustomButtonAligned = ({ names, links }) => {
  const link0 = links[0],
    link1 = links[1],
    name0 = names[0],
    name1 = names[1];
  return (
    <div className="alignedbuttons">
      <CustomButtonFilled name={name0} link={link0} />
      <CustomButtonBorder name={name1} link={link1} />
    </div>
  );
};
