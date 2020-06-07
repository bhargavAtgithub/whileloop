import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label }) => (
  <div className="forminput">
    <input className="input" type="text" onChange={handleChange} name={label} />
    <label name={label}>{label}</label>
  </div>
);

export default FormInput;
