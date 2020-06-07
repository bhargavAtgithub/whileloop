import React from "react";

import "./team.styles.scss";

import Introduction from "../../components/introduction/introduction.component";
import ProfileList from "../../components/profile-list/profile-list.component";

const Team = ({ introduction, departments }) => (
  <div className="team">
    <Introduction title={introduction[0]} tagline={introduction[1]} />
    <div className="temp">
      <h4>Projects</h4>
      <span className="xs op2">
        <i>Under development</i>
      </span>
    </div>
    <div className="departments">
      {Object.entries(departments[0]).map(([key, value]) => {
        console.log(key, value);
        return <ProfileList department={key} profilelist={value} key={key} />;
      })}
    </div>
  </div>
);

export default Team;
