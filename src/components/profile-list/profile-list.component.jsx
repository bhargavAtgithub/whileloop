import React from "react";

import "./profile-list.styles.scss";

import Profile from "../profile/profile.component";

const ProfileList = ({ department, profilelist }) => (
  <div className="profilelist">
    <h4>{department}</h4>
    <div className="list">
      {profilelist.map((profile, key) => (
        <Profile
          source={profile[0]}
          name={profile[1]}
          bio={profile[2]}
          key={key}
        />
      ))}
    </div>
  </div>
);

export default ProfileList;
