import React, { Component } from "react";
import Experience from "../Cards/Experience_card";
import ExperienceContent from "../../contents/experience";
import Education from "../Cards/Education_card";
import EducationContent from "../../contents/education";

export default class Intro extends Component {
  render() {
    return (
      <div>
        <h2 className="major">Resume</h2>
        <h3>Experience</h3>
        <Experience experience={ExperienceContent} />
        <h3>Education</h3>
        <Education education={EducationContent} />
      </div>
    );
  }
}
