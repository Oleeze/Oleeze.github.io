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
        <div className="topRight" />
        <div className="center">
          <div className="centerContent">
            <h1>Oleg Rudenko</h1>
            <p>FrontEnd Developer</p>
          </div>
        </div>
        <div className="bottomLeft" />
      </div>
    );
  }
}

export default Home;
