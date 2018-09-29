import React, { Component } from "react";
import "../styles/Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div className="projectWrapper">
        <h1>Projects</h1>
        <div className="project">
          <a href="https://whispering-badlands-74800.herokuapp.com">
            <img src={require("../images/chat.png")} />
            <div className="projectDesc">
              <div className="projectDescTop">
                <h3>Real time Chat Room</h3>
                <h4>React | NodeJS(Express) | PostgreSQL | SASS</h4>
              </div>
              <p>A platform where you can chat with friends and others.</p>
              <div className="projectDescMain">
                <p>
                  Using socket.io to render real time messaging between users.
                </p>
                <p>
                  Collaborated with a UI/UX designer to illustrate design ideas,
                  and bringing them to life with React SASS modules.
                </p>
                <p>
                  Made signing up for an account super easy by authenticating
                  users with Google, Facebook, and Github passport.js
                  strategies.
                </p>
              </div>
            </div>
          </a>
        </div>
        <h2>
          <a href="https://whispering-badlands-74800.herokuapp.com">
            CHATTERCAT{" "}
          </a>
        </h2>
      </div>
    );
  }
}

export default Projects;
