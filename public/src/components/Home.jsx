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
    return <div className="homeOuterWrapper" />;
  }
}

export default Home;
