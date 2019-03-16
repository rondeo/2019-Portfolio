import React, { Component } from "react";
import Projects from "../Cards/Project_card";
import projects from "../../contents/project";

export default class Work extends Component {
  render() {
    return (
      <div>
        <h1 className="major">Work</h1>
        <p>
          On this page you will find a handful of my favourite projects – both
          personal and commercial.
        </p>
        <Projects projects={projects} />
      </div>
    );
  }
}
