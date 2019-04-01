import React from "react";
import Typewriter from "./Scripts/Typewriter";
import PropTypes from "prop-types";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="content">
      <div className="inner">
        <h1><Typewriter className="hero-title" text="MOHAMED SASSI" /></h1>
        <p>A Toronto Ui front-end developer who loves UI effects, <br/>
        animation and dynamic user experience.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("resume");
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
