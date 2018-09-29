import React, { Component } from "react";
import "../styles/About.scss";

class About extends Component {
  render() {
    return (
      <div className="outerAboutWrapper">
        <div className="aboutWrapper">
          <div className="leftSide">
            <img className="profileImg" src={require("../images/me.png")} />
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/ogrudenko/">
                  <img src={require("../images/LinkedIn.png")} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Oleeze">
                  <img src={require("../images/GitHub.png")} />
                </a>
              </li>
              <li>
                <h1>Resume</h1>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="about">
              <h1>About me</h1>
              <p>
                I am a front end engineer specializing in JavaScript. I have
                experience in cutting edge frameworks and technologies such as
                Angular, React, and Node. I combine my analytical mind and
                communication ability to bring complex ideas and projects to
                life.
                <br />
                <br />I believe being passionate is the one key ingredient for
                being good in any profession. Programming is a creative outlet
                for me, it's never boring, everyday I am faced with new
                challenges, and I'm constantly learning from them.
                <br />
                <br />
                As a developer, I'm passionate about bringing ideas to life,
                helping applications grow into something more than they were
                initially intended to be. I get a feeling of accomplishment when
                an application is ready for deployment. After spending countless
                hours coding, I feel proud of myself for creating something out
                of nothing. There are always new features you can add, different
                ways of building the same thing, and a never ending cycle of
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
