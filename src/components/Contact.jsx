import React, { Component } from "react";
import "../styles/Contact.scss";
class Contact extends Component {
  render() {
    return (
      <div className="contactWrapper">
        <div className="formWrapper">
          <div className="info">
            <a>orudenkony@gmail.com</a>
            <a>Tel: 973.580.3059 </a>
            <a>I am located in Los Angeles,</a>
            <a> lets meet up and chat </a>
          </div>
          <form
            action="https://formspree.io/orudenkony@gmail.com"
            method="POST"
            className="form"
          >
            <div className="formTop">
              <div className="inputWrapper">
                <p>Name</p>
                <input
                  className="input"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="inputWrapper">
                <p>Email</p>
                <input
                  className="input"
                  type="text"
                  name="_replyto"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <p>Message</p>
            <textarea
              className="Message"
              placeholder="Message"
              name="message"
            />
            <input className="Send" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
