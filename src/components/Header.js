import React from "react";
import Typewriter from "./Scripts/Typewriter";
import PropTypes from "prop-types";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="content">
      <div className="inner">
        <Typewriter className="hero-title" text="MOHAMED SASSI" />
        <p>
          FRONTEND DEVELOPER & CREATIVE UI DESIGNER
          <br /> INVOLVING WITH LATEST WEB DESIGN AND TECHNOLOGIES
        </p>
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
