import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { StyledLink, Nav } from "../components/styles";

// import "../styles/navigation.css";

class Navigation extends Component {
    render() {
        return (
            <Nav>
                <StyledLink to="/">
                    <div>Profile</div>
                </StyledLink>
                <StyledLink to="/projects">
                    <div>Projects</div>
                </StyledLink>
                <StyledLink to="/experience">
                    <div>Experience</div>
                </StyledLink>
                <StyledLink to="/blog">
                    <div>Blog</div>
                </StyledLink>
            </Nav>
        );
    }
}

export default Navigation;
