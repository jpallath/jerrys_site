import React, { Component } from "react";

class ProjectBackward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "inactive"
    };
    this.menuChange = this.menuChange.bind(this);
  }
  menuChange = propId => {
    this.props.changeProject(propId, "backward");
  };

  render() {
    let { currentProject } = this.props;
    return (
      <div
        className="project-arrow backward"
        onClick={() => this.menuChange(currentProject.id)}
      >
        <i className="fas fa-caret-left" />
      </div>
    );
  }
}

export default ProjectBackward;
