import React, { Component } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import SkillSet from "./SkillSet.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import "../styles/App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <div className="trans" />
        <About />
        <SkillSet />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
