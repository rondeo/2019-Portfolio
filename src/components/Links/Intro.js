import React, { Component } from "react";
import pic01 from "../../images/me.png";

export default class Intro extends Component {
  render() {
    return (
      <div>
        <h2 className="major">Intro</h2>
        <span className="image main">
          <img src={pic01} alt=" Mohamed Sassi" />
          <div>
            <p className="profile-info">
              <strong>Name:</strong> Mohamed Sassi <br />
              <strong>Email:</strong> Sassi360@gmail.com
            </p>
            <a
              className="resume-button"
              href="https://drive.google.com/open?id=1q-edvQ-4-SPzK39zm01isTQyEHpqRyzq"
              alt="resume button"
            >
              Download My CV
            </a>
          </div>{" "}
        </span>
        <h3>What I do</h3>
        <p className="textblock">
        As an experienced user-interface designer and front-end developer with 4+ years of commercial experience, I specialized in design/development of web applications and responsive websites with special attention to best practices. I am passionate about engaging in the professional community and following the ever-evolving web landscape, particularly with regards to emerging technologies, usability and design. I’m a keen follower of Agile and iterative design, backed by A/B & multivariate split testing.
        </p>
        <h3>Skills and technologies</h3>
        <div className="skills">
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Git</li>
            <li>React</li>
            <li>GatsbyJs</li>
            <li>Apollo</li>
            <li>GraphQL</li>
            <li>Vue</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>MYSQL</li>
            <li>Styled Component</li>
          </ul>

          <ul>
            <li>Docker/Vagrant</li>
            <li>MongoDB</li>
            <li>AWS, Digital Ocean and Netlify</li>
            <li>Sketch/Adobe XD</li>
            <li>Jira/Confluence</li>
            <li>Grunt/Gulp</li>
            <li>NPM & Yarn</li>
            <li>Webpack</li>
            <li>Unit testing</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>CMS (WordPress and Contentful) </li>
            <li>E-commerce (Shopify, WooCommerce)</li>
            <li>Testing/Debugging</li>
          </ul>
        </div>
      </div>
    );
  }
}
