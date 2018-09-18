import React, { Component } from "react";
import "../styles/Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div className="projectWrapper">
        <h1>Projects</h1>

        <div className="project">
          <div className="left">Left</div>
          <div className="right">Right</div>
        </div>
        <div className="project">
          <div className="right">Right</div>
          <div className="left">Left</div>
        </div>
      </div>
    );
  }
}

export default Projects;
