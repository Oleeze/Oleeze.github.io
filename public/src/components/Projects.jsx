import React, { Component } from "react";
import "../styles/Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div className="projectWrapper">
        <div className="project">
          <div className="left">Left</div>
          <div className="right">
            <h1>Airbnb</h1>
            <p>First</p>
            <p>Second</p>
            <p>Last</p>
          </div>
        </div>
        <div className="project">
          <div className="left">Left</div>
          <div className="right">
            <h1>ChatterCat</h1>
            <p>First</p>
            <p>Second</p>
            <p>Last</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
