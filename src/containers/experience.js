import React, { Component } from "react";
import { ExperienceContainer } from "../components/styles";
// import "../styles/experience.css";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                "Node.js",
                "Ruby on Rails",
                "PHP",
                "WordPress",
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "HTML5/CSS3",
                "JavaScript",
                "Ruby",
                "jQuery",
                "React/Redux",
                "Angular.js",
                "Responsive Design",
                "SASS/SCSS",
                "Gulp/Grunt",
                "Jasmine (Unit Testing)",
                "JIRA",
                "Git / Github"
            ],
            experience: [
                {
                    id: 0,
                    company: "Freelance",
                    position: "Web Developer",
                    projects: [
                        "Built out the entire website to greet future attendees and to organize participation. Developed the core logic and flow along with building out a responsive design.",
                        "Used React.js to build out containers and components for specific interactions.  ",
                        "In the Gallery Container, I worked with Flickr’s API to pull pictures from their database and push it to the webpage's front-end.  When more images are pulled through the API, React will just push the photos into the state without re-rendering the page.  This page simulated infinite scroll.",
                        "In the Festivities container, I used the Google Maps JavaScript API to specify destinations in the User Interface which required a ComponentWillUpdate method since the state would be completely altered with the choice of a specific prop.."
                    ]
                },
                {
                    id: 1,
                    company: "Digital Remedy",
                    position: "Front End Developer",
                    projects: [
                        "Built out the “Dashboard” and “Link Library” pages for our Nibble Vault App project.  Our app allowed one of our associated influencers to check  how much money they generated with our tagged articles.",
                        "I generated the final front-end for all interactions a user makes on the page; utilizing mainly CSS3, and fine-tuning incorrect JavaScript blocks to improve the page’s response. I transformed our database calls to tangible information an influencer can understand.  This required PHP to calculate the differences made between each day, week, and month along with the percent change of each time period for the associated Influencer.  Built out three separate submodules that required different database (MySQL) pulls along with the calculations. Presented all of the data utilizing HTML and injecting PHP and building out the experience with CSS3 and JavaScript. ",
                        "Day to day required maintenance of the company’s various WordPress sites.  This required understanding 3 different WordPress themes for 8 different blogs.  I fine-tuned and built out plugins that presented new data in our web pages such as the Brand Ambassador shortcode which would pull out a short styled blurb of a featured artist for our HipHopMyWay page.  "
                    ]
                },
                {
                    id: 2,
                    company: "Mediaplanet",
                    position: "Front End Developer",
                    projects: [
                        "Conceived and developed an Ad Shuttle page.  This page presented advertisers all of Mediaplanet’s technical specifications for print and digital ads, a terms and conditions link, and finally a link to our Ad Server which let Advertisers drop their finished ad directly into our office’s server.",
                        "Built out a completely updated interface for all of our websites that made pages more accessible for readers on any kind of interface (desktop, mobile, and tablet)",
                        "Provided maintenance on a number of our websites.  Was the Director of all technology happening our New York and Toronto offices."
                    ]
                },
                {
                    id: 3,
                    company: "New York University",
                    position: "Student IT Assistant",
                    projects: [
                        "Along with developing a deeper understanding of computers and how they work, I developed my people to people skills in explaining how and why problems came up on their computer."
                    ]
                }
            ]
        };
    }
    render() {
        const jobs = this.state.experience.map(exp => (
            <div className="job-containers" key={exp.id}>
                <h3>
                    {exp.company} as a {exp.position}
                </h3>
                <ul className="job-projects">
                    {exp.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            </div>
        ));
        const skills = this.state.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ));
        return (
            <div className="experience">
                <ExperienceContainer className="jobs-box">
                    <div className="job-container og">
                        <h3>Previous Experience</h3>
                    </div>
                    {jobs}
                </ExperienceContainer>
                <ExperienceContainer className="skills">
                    <div className="og">
                        <h3>Skills</h3>
                    </div>
                    <ul>{skills}</ul>
                </ExperienceContainer>
            </div>
        );
    }
}

export default Experience;
