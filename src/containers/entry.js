import React, { Component } from "react";

class Entry extends Component {
  render() {
    const { projects } = this.props;
    const entries = projects.map((entry, index) => (
      <div key={index}>{entry}</div>
    ));
    return <div className="enclosure">{entries}</div>;
  }
}

export default Entry;
