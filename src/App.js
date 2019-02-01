import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./containers/navigation";
import Profile from "./containers/profile";
import Projects from "./containers/projects";
import Experience from "./containers/experience";
import Contact from "./containers/contact";
import Blog from "./containers/blog";
import "./styles/index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path="" render={props => <Profile />} />
          <Route exact path="/projects" render={props => <Projects />} />
          <Route exact path="/experience" render={props => <Experience />} />
          <Route exact path="/blog" render={props => <Blog />} />
          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
