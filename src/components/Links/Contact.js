import React, { Component } from "react";


export default class Contact extends Component {

  render() {
    return (
      <div>
        <h2 className="major">Contact</h2>
        <p>Have a question or want to work together? Feel free to contact me.</p>

        <form name="contact" method="post" action="/thanks" data-netlify="true" data-netlify-honeypot="bot-field">

          <input type="hidden" name="bot-field"/>

          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" required/>
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="email@mail.com" required/>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" placeholder="Enter your message" required></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special"/></li>
            <li><input type="reset" value="Clear"/></li>
          </ul>
        </form>
      </div>
    );
  }
}
