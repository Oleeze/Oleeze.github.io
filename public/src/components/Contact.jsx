import React, { Component } from "react";
import "../styles/Contact.scss";
class Contact extends Component {
  render() {
    return (
      <div className="contactWrapper">
        <div className="formWrapper">
          <div className="info">
            <a href="#">orudenkony@gmail.com</a>
            <a>Tel: 973.580.3059 </a>
            <a>I am located in Los Angeles,</a>
            <a> lets meet up and chat </a>
          </div>
          <form
            action="https://formspree.io/orudenkony@gmail.com"
            method="POST"
          >
            <div className="formTop">
              <input className="input" type="text" placeholder="Name" />
              <input
                className="input"
                type="text"
                name="_replyto"
                placeholder="Email"
              />
            </div>
            <textarea className="Message" placeholder="Message" />
            <input className="Send" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
