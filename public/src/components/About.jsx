import React, { Component } from "react";
import "../styles/About.scss";

class About extends Component {
  render() {
    return (
      <div className="outerAboutWrapper">
        <div className="aboutWrapper">
          <div className="leftSide">
            <img className="profileImg" src={require("./me.png")} />
            <a href="https://www.linkedin.com/in/ogrudenko/">
              <img src={require("./LinkedIn.png")} />
            </a>
            <a href="https://github.com/Oleeze">
              <img src={require("./GitHub.png")} />
            </a>

            <p className="resume">resume</p>
          </div>
          <div className="right">
            <div className="about">
              <h1>About me</h1>
              <p>
                I’ve recently graduated essex county college with a degree in
                software development. I believe being passionate is the one key
                ingredient for being good in any profession. Programming is a
                creative outlet for me, it's never boring, everyday I’m faced
                with new challenges and Im constantly learning from them. As a
                developer im passionate about bringing ideas to life, helping
                applications grow into something more than they were initially
                intended to be. I get a feeling of accomplishment when an
                application is ready for deployment because it's something I
                spent countless hours into creating, i feel proud of myself for
                creating something out of nothing. There are always new features
                you can add, different ways of building the same thing and a
                never ending cycle of improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
