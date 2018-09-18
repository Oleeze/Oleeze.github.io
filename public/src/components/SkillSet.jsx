import React, { Component } from "react";
import "../styles/SkillSet.scss";

class SkillSet extends Component {
  render() {
    return (
      <div className="outerSkillWrapper">
        <div className="skillWrapper">
          <div className="skillBox">
            <h3>Languages</h3>
            <p>Javascript (JSX, ES6, ES5)</p>
            <p>SQL</p>
            <p>CSS (SASS)</p>
            <p>HTML5</p>
          </div>
          <div className="skillBox">
            <h3>Front End Frameworks</h3>
            <p>React (Redux)</p>
          </div>
          <div className="skillBox">
            <h3>Back End Frameworks</h3>
            <p>Node (Express)</p>
          </div>
          <div className="skillBox">
            <h3>Databases</h3>
            <p>MongoDB (Mongoose)</p>
            <p>PostrgreSQL (Sequelize)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillSet;
