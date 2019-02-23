import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/me.png'

import work1 from '../images/pic1.png'
import work2 from '../images/pic2.png'
import work3 from '../images/pic3.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="Profile Picture of Mohamed Sassi" />
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
            </div>{' '}
          </span>
          <h3>Objective</h3>
          <p className="textblock">
            An opportunity to work and upgrade oneself, as well as being
            involved in an organization that believes in gaining a competitive
            edge and giving back to the community. I focus on using my
            interpersonal skills to build a good user experience. I hope to
            develop my skills in frontend development, my knowledge of the Web,
            and become an honest asset to the business. As an individual, I'm
            confident you'll find me creative, funny and naturally passionate.
            I'm a forward thinker, which others may find inspiring when working
            as a team.
          </p>
          <h3>What I do</h3>
          <p className="textblock">
            I have 4 years of hands-on experience efficiently designing and
            coding websites/applications using modern HTML, CSS, and JavaScript
            (React and Angular) along with other technology stacks that I have
            acquired over the years. Building state-of-the-art, easy to use,
            user-friendly websites and applications is truly a passion of mine
            and I am confident I would be an excellent addition to your
            organization. I actively seek out new technologies and stay
            up-to-date on industry trends and advancements. This has allowed me
            to stay ahead of the curve and deliver exceptional work to all of my
            employers, including those I've worked for on a project basis.
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

          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <h3>Experience</h3>

          <div className="subtitle">
            <h6>OCTOBER 2014 - PRESENT</h6>
            <h3>FREELANCE - TORONTO, ON</h3>
            <p>FRONTEND DEVELOPER AND UI DESIGNER</p>
          </div>
          <p className="textblock">
            • Created custom websites integrated with popular CMS platforms such
            as WordPress, Drupal using PHP, HTML 5, CSS 3, jQuery/JavaScript and
            MySQL.
            <br />
            • Built custom eCommerce Solutions on top of PHP projects using
            payment APIs and integrated SSL backed systems.
            <br />
            • Work with sites throughout the entire life of the project
            including initial development, QA testing, debugging, server
            administration and site launch as well as setting up Google
            Analytics and Webmasters tools.
            <br />
            • Produced responsive and SEO friendly user interfaces and visual
            designs – from concept to launch on web and mobile applications for
            small to medium-sized businesses. <br />
            • Designed visual mockups/prototypes from wireframes and delivered
            final design production-ready assets for development. <br />
            • Produced marketing assets for consumer and industry events and
            promotions. <br />
            • Technologies Used: HTML5, CSS3, BootStrap, WordPress, Drupal ,
            jQuery, Javascript with (React.js, Angular.js and vue.js), JSON,
            XML, PHP, MySQL, Drupal, Node.js, Git and AJAX.
            <br />
          </p>

          <div className="subtitle">
            <h6>OCTOBER 2016 - JUNE 2018</h6>
            <h3>TAlENTNET INC - TORONTO, ON</h3>
            <p>FRONTEND DEVELOPER</p>
          </div>
          <p className="textblock">
            • Develop frontend interfaces for single page application (SPA),
            utilizing JavaScript frameworks and libraries (Ember.JS and
            ReactJS.) <br />
            • Implement responsible web design principles to ensure that the
            company website renders well across multiple devices.
            <br />
            • Assist in the development of applications and features that will
            be put on the website and in internal functions as well.
            <br />
            • Participate as part of an agile development team.
            <br />
            • Responsible for the coding of all UI interactivity.
            <br />
            • Work with sites throughout the entire life of the project
            including initial development, QA testing, debugging and site
            launch.
            <br />
            • Converting PSD/Sketch files to functional web application.
            <br />
            • Utilize frontend build tools and JavaScript tooling such as NPM,
            Bower, Babel and Webpack.
            <br />• Technologies Used: HTML5, CSS3, Javascript framework
            (Ember.js and React.js), JSON, PHP with Symfony 4 framework and
            MongoDB.
          </p>

          <h3>Education</h3>
          <div className="subtitle">
            <h6>SEPTEMBER 2014 - PRESENT</h6>
            <h3>SELF-TAUGHT - TORONTO, ON</h3>
            <p>FRONTEND WEB DEVELOPMENT & COMPUTER SCIENCE</p>
          </div>
          <div className="subtitle">
            <h6>SEPTEMBER 2012 - APRIL 2016</h6>
            <h3>SHERIDAN COLLEGE - BRAMPTON, ON</h3>
            <p>ARCHITECTURAL TECHNOLOGY</p>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <div className="project-container">
            <div className="placeholder-col">
              <img src={work1} alt="thomsonreuters talentnet community" />
              <div className="overlay" />
              <strong>Community Verison</strong>
              <p>
                Contingent workforce self-sourcing solutions that optimize
                existing VMS data.
              </p>
            </div>

            <div className="placeholder-col">
              <img src={work2} alt="bench-thomsonreuters talentnet community" />
              <div className="overlay" />
              <strong>Recuriter Verison</strong>
              <p>
                Contingent workforce self-sourcing solutions that optimize
                existing VMS data.
              </p>
            </div>
            <div className="placeholder-col">
              <img src={work3} alt="Off-road blog" />
              <div className="overlay">
                <div className="text" />
              </div>
              <strong>Off-road blog</strong>
              <p>
                A site dedicated to Off-Road Reviews, Racing, Parts, ATVs, UTVs,
                4x4s, Trucks, Forums, Blogs and more.
              </p>
            </div>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Have a question or want to work together? Feel free to contact me.
          </p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
