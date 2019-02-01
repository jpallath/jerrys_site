import React, { Component } from "react";

class BlogForward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "inactive"
    };
    this.menuChange = this.menuChange.bind(this);
    this.hoverPost = this.hoverPost.bind(this);
  }
  menuChange = propId => {
    this.props.changePost(propId, "forward");
  };
  hoverPost = () => {
    let hoverStatus = "active";
    this.setState({ hover: hoverStatus });
  };

  hoverLeavePost = () => {
    let hoverStatus = "inactive";
    this.setState({ hover: hoverStatus });
  };
  render() {
    let { currentId } = this.props;
    return (
      <div
        className="blog-arrow forward"
        onClick={() => this.menuChange(currentId)}
        onMouseEnter={() => this.hoverPost()}
        onMouseLeave={() => this.hoverLeavePost()}
      >
        <i className="fas fa-caret-right" />
        <a className={"tooltip " + this.state.hover}>Next</a>
      </div>
    );
  }
}

export default BlogForward;
