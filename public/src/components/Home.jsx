import React, { Component } from "react";
import "../styles/Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: ""
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ first: "Oleg" });
    }, 2000);
    setTimeout(() => {
      this.setState({ last: "Rudenko" });
    }, 3000);
  }

  render() {
    return (
      <div className="homeOuterWrapper">
        <div className="homeWrapper">
          {/* <h1>{this.state.first}</h1>
        <h1>{this.state.last}</h1> */}
          {/* <div className="homeLeft">Left</div>
          <div className="homeMiddle" />
          <div className="homeRight">Right</div> */}
          <img src={require("../letters/O.png")} />
          <img src={require("../letters/L.png")} />
          <img src={require("../letters/E.png")} />
          <img src={require("../letters/G.png")} />
        </div>
      </div>
    );
  }
}

export default Home;
