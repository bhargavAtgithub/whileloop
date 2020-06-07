import React from "react";

import "./profile.styles.scss";

const Profile = ({ source, name, bio }) => (
  <div className="profile card2">
    <img src={source} alt="profile pic" />
    <span className="name">{name}</span>
    <span className="bio xs op1">{bio}</span>
  </div>
);

export default Profile;
