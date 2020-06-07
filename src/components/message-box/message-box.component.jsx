import React from "react";

import "./message-box.styles.scss";

const MessageBox = ({ rows, label }) => (
  <div className="messagebox">
    <textarea rows={rows} name={label} className="box"></textarea>
    <label htmlFor={label}>{label}</label>
  </div>
);

export default MessageBox;
