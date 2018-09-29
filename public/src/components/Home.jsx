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

  componentDidMount() {
    window.scrollTo(0, 0);
    this.updateCanvas();
    window.addEventListener("resize", this.updateCanvas.bind(this));
  }

  updateCanvas() {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    function Star(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }

    Star.prototype.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.shadowColor = "#E3EAEF";
      c.shadowBlur = Math.random() * 25 + 10;
      c.shadowOffsetX = 0;
      c.shadowOffsetY = 0;
      c.fill();
      c.closePath();
    };

    Star.prototype.update = function() {
      this.draw();
    };

    let stars;
    function init() {
      stars = [];
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3;
        stars.push(new Star(x, y, radius, "#E3EAEF"));
      }
    }

    //Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
      });
    }

    init();
    animate();
  }

  render() {
    return (
      <div className="homeOuterWrapper">
        <canvas ref="canvas" handleResize={this.updateCanvas} />
        <div className="Logo">
          <img src={require("./Logo.png")} />
          <div className="Me">
            <h1>Front End Web Developer</h1>
            <h2>Oleg Rudenko</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
