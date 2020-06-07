import React from "react";

import "./team.styles.scss";

import Introduction from "../../components/introduction/introduction.component";
import ProfileList from "../../components/profile-list/profile-list.component";

const Team = ({ introduction, departments }) => (
  <div className="team">
    <Introduction title={introduction[0]} tagline={introduction[1]} />
    {Object.entries(departments).forEach(([key, value]) => {
      console.log(key);
      return <ProfileList department={key} profilelist={value} key={key} />;
    })}
  </div>
);

export default Team;
