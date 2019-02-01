import React, { Component } from "react";
import { StyledProjectItem } from "./styles";
// import "../styles/projectItem.css";

class ProjectItem extends Component {
  render() {
    let { title, project, picture, github, link } = this.props.currentProject;
    let projectDescription = project.map((proj, index) => (
      <p key={index}>{proj}</p>
    ));
    return (
      <StyledProjectItem className="project-item">
        <img src={picture} alt="null" />
        <div className="project-links">
          {link ? (
            <a target="_blank" href={link}>
              Project
            </a>
          ) : null}
          <a target="_blank" href={github}>
            Github
          </a>
        </div>
        <h1>{title}</h1>
        <div>{projectDescription}</div>
      </StyledProjectItem>
    );
  }
}

export default ProjectItem;
