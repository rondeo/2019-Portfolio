import React, { Component } from "react";

import work1 from "../../images/pic1.png";
import work2 from "../../images/pic2.png";
import work3 from "../../images/pic3.png";
import Projects from "../Cards/Project_card";

import projects from "../../contents/project";

import project from "../Cards/Project_card";
export default class Work extends Component {
  render() {
    return (
      <div>        
        <h1 className="major">Work</h1>
        <p>On this page you will find a handful of my favourite projects – both personal and commercial.</p>
        <Projects projects={projects} />
      </div>
    );
  }
}
