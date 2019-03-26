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
        <h3>Objective</h3>
        <p className="textblock">
          An opportunity to work and upgrade oneself, as well as being involved
          in an organization that believes in gaining a competitive edge and
          giving back to the community. I focus on using my interpersonal skills
          to build a good user experience.I hope to develop my skills in
          frontend development, my knowledge of the Web, and become an honest
          asset to the business. As an individual, I 'm confident you'll find me
          creative, funny and naturally passionate. I 'm a forward thinker, which
          others may find inspiring when working as a team.
        </p>
        <h3>What I do</h3>
        <p className="textblock">
          I have 4 years of hands-on experience efficiently designing and coding
          websites/applications using modern HTML, CSS, and JavaScript along
          with other technology stacks that I have acquired over the years.
          Building state-of-the-art, easy to use, user-friendly websites and
          applications is truly a passion of mine and I am confident I would be
          an excellent addition to your organization. I actively seek out new
          technologies and stay up-to-date on industry trends and advancements.
          This has allowed me to stay ahead of the curve and deliver exceptional
          work to all of my employers, including those I've worked for on a
          project basis.
        </p>
        <h3>Skills and technologies</h3>
        <div className="skills">
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6)</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Vue</li>
            <li>JSON</li>
            <li>PHP</li>
            <li>Responsive Design</li>
            <li>Web Animation</li>
            <li>Verison Control (GIT)</li>
            <li>MongoDB</li>
            <li>MYSQL</li>
            <li>Web Performance</li>
          </ul>

          <ul>
            <li>Docker/Vagrant</li>
            <li>AWS, Digital Ocean, Netlify, Heroku</li>
            <li>Sketch/Adobe XD</li>
            <li>Wireframes</li>
            <li>Grunt/Gulp</li>
            <li>NPM & Yarn</li>
            <li>Webpack</li>
            <li>Unit testing</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>CMS (WordPress and Drupal) </li>
            <li>E-commerce (Shopify, WooCommerce)</li>
            <li>Node.js</li>
            <li>Testing/Debugging</li>
          </ul>
        </div>
      </div>
    );
  }
}
