import React, { Component } from "react";
import JerryP1 from "../images/jerryp.jpg";
import { Prof, ProfImage, Person, Emphasis } from "../components/styles";
// import "../styles/profile.css";
// import styled from "styled-components";
class Profile extends Component {
    render() {
        return (
            <Prof className="profile">
                <ProfImage className="image-container">
                    <img src={JerryP1} alt="Jerry" className="profile-pic" />
                    <div className="image-links">
                        <a href="https://github.com/jpallath">
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/jpallath">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="https://www.facebook.com/jpallath">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://twitter.com/Pallethechu">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.instagram.com/shotsbybear/">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </ProfImage>
                <Person className="person">
                    <h1>Jerry Pallath</h1>
                    <p>
                        Hello! Thanks for finding your way to my corner of the
                        internet. I'm <Emphasis>Jerry Pallath</Emphasis> and I'm
                        a bleeding-edge of technology{" "}
                        <Emphasis>Web Developer</Emphasis>. I like to stay
                        current with trends so that my clients and the people I
                        work with always see the{" "}
                        <Emphasis>best results</Emphasis>. Peruse the site, play
                        around with the components, look at my projects, and
                        find out if Jerry Pallath is perfect addition to your
                        diet.
                    </p>

                    <p>
                        I’ve been in love with <Emphasis>technology</Emphasis>{" "}
                        since I was a kid. I used to tinker with my computer,
                        sometimes the hardware; but most of the time, I would be
                        hacking the <Emphasis>software</Emphasis> I used. I felt
                        creative trying to break and add functionality to the
                        services I used. I felt my creativity brewing when I
                        tinkered with my Xanga or MySpace pages (R.I.P by the
                        way). I never expected the technologies behind these
                        services to <Emphasis>evolve</Emphasis>, but they did
                        and introduced me to the career that always seemed right
                        to me.{" "}
                    </p>

                    <p>
                        I started my real career in 2015 when I took part in{" "}
                        <Emphasis>
                            General Assembly's Web Development Immersive
                            Bootcamp
                        </Emphasis>. There I learned how to develop Full Stack
                        Applications with Node.js and Rails with some front end
                        development peppered in. I worked as a Front End
                        Engineer at Mediaplanet and Digital Remedy, where I
                        introduced new ideas and components that are still being
                        used after I’ve left.{" "}
                    </p>

                    <p>
                        I’m in search of opportunities that will let me{" "}
                        <Emphasis>
                            push the current trends of web development further
                        </Emphasis>. I stay competitive with trends and
                        frameworks and I want to work with people looking
                        towards the bleeding edge of technology.
                    </p>
                    <p>
                        Outside of development, I’m a fun person. People like
                        me. I love watching YouTube videos and listen to
                        podcasts to stay up to date on Pop Cult, Theories, and
                        just random geekiness.
                    </p>
                    <ul>
                        <li>Music: mostly Hip-Hop and Alternative Rock</li>
                        <li>
                            Anime and Manga: One Piece, Full Metal Alchemist
                        </li>
                        <li>Technology: Android, macOS, Web Apps</li>
                        <li>
                            Podcasts: Technology, Culture, Comedy, Long-Form
                        </li>
                    </ul>
                </Person>
            </Prof>
        );
    }
}

export default Profile;
