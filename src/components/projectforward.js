import React, { Component } from "react";

class ProjectForward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "inactive"
    };
    this.menuChange = this.menuChange.bind(this);
  }
  menuChange = propId => {
    this.props.changeProject(propId, "forward");
  };

  render() {
    let { currentProject } = this.props;
    return (
      <div
        className="project-arrow forward"
        onClick={() => this.menuChange(currentProject.id)}
      >
        <i className="fas fa-caret-right" />
      </div>
    );
  }
}

export default ProjectForward;
