import React, { Component } from "react";
// import "../styles/projectmenu.css";
import { Menu } from "./styles";
import ProjectForward from "./projectforward";
import ProjectBackward from "./projectbackward";

class ProjectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeProject = this.changeProject.bind(this);
  }
  menuChange = propId => {
    this.props.menuChange(propId);
  };
  changeProject = (postId, direction) => {
    this.props.changePost(postId, direction);
  };
  render() {
    const { projects, currentProject } = this.props;
    let projectOptions = projects.map(project => (
      <li
        key={project.id}
        onClick={() => this.menuChange(project.id)}
        className={
          project.id === this.props.currentProject.id ? "active" : null
        }
      >
        {project.title}
      </li>
    ));
    return (
      <Menu className="project-menu">
        <div className="project-direction">
          <ProjectBackward
            currentProject={currentProject}
            changeProject={this.changeProject.bind(this)}
          />
          <ProjectForward
            currentProject={currentProject}
            changeProject={this.changeProject.bind(this)}
          />
        </div>
        <h3>Projects</h3>
        {projectOptions}
      </Menu>
    );
  }
}

export default ProjectMenu;
