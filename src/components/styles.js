import styled from "styled-components";
import { Link } from "react-router-dom";

const colors = {
  primaryColor: "#533a71",
  secondaryColor: "#50c5b7"
};

// Nav
export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 4vh;
    background: ${colors.primaryColor}
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    z-index: 1000;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  width: 25%;
  color: ${colors.secondaryColor};
  transition: all 0.5s linear;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "Tajawal", sans-serif;
  &:hover {
    border-bottom: ${colors.secondaryColor} 5px solid;
  }
  &:visited {
    color: ${colors.secondaryColor};
  }
`;

//profile
export const Prof = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 8vh;
  font-family: "Tajawal", sans-serif;
`;

export const ProfImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 40%;
    }
    .image-links {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        width: 20%;
        a{
            color: ${colors.primaryColor}
            transition: all .5s ease-in;
            &:hover {
                color: ${colors.secondaryColor};
            }
            &:visited {
                color: ${colors.primaryColor};
            }
        }
    }
    @media (max-width: 450px) {
        img {
            width: 100%;
        }
        .image-links {
            width: 100vw;
            background: ${colors.secondaryColor};
            a{
                text-align: center;
                width: 20%;
                height: 5vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 24px;
  padding-bottom: 10vh;
  font-family: "Tajawal", sans-serif;
  h1 {
    text-align: center;
  }
`;

export const Emphasis = styled.span`
  color: ${colors.secondaryColor};
`;

//CONTACT
export const ContactMe = styled.div``;

export const Envelope = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in;
  font-family: "Tajawal", sans-serif;
  ${props =>
    props.visibility === "contact shown" ? `bottom: 10px;` : `bottom: 210px;`};
  z-index: 1000;
  svg {
    border: 5px solid black;
    padding: 5px;
    font-size: 50px;
    border-radius: 50px;
    transition: 0.5s ease-in all;
    ${props =>
      props.visibility === "contact shown"
        ? `background: ${colors.primaryColor}; color: ${colors.secondaryColor}`
        : `background: ${colors.secondaryColor}; color: ${
            colors.primaryColor
          }`};
  }
`;

export const Form = styled.div`
  width: 100vw;
  background: ${colors.primaryColor};
  padding: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  opacity: ${props => (props.visibility === "contact shown" ? 0 : 1)};
  transition: all ease-in 0.5s;
  font-family: "Tajawal", sans-serif;
  form {
    transition: all ease-in 0.5s;
    opacity: ${props => (props.visibility === "contact shown" ? 0 : 1)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: ${colors.secondaryColor};
      font-size: 18px;
      label {
        align-self: flex-start;
      }
      input,
      textarea {
        width: 50vw;
        border-radius: 50px;
        text-align: center;
      }
    }
    .subbed {
      background: ${colors.secondaryColor};
      border-color: ${colors.secondaryColor};
      border-radius: 50px;
    }
  }
`;
//PROJECT
export const Menu = styled.div`
    position: fixed;
    height: 100vh;
    width: 15%;
    list-style: none;
    z-index: 100;
    top: 3vh;
    left: 0;
    background: ${colors.secondaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Tajawal", sans-serif;
    .project-direction{
        display: none;
    }
    h3 {
        text-align: center;
    }
    .active{
        background: ${colors.primaryColor};
        cursor: pointer;
        color: ${colors.secondaryColor}
    }
    li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ease-in 0.5s;
        background-color: transparent;
        color: ${colors.primaryColor}
        height: 25px;
        font-size: 20px;
        font-size: 1em;
        text-align: center;
        &:hover {
            background: ${colors.primaryColor};
            cursor: pointer;
            color: ${colors.secondaryColor}
        }
    }
        @media (max-width: 450px) {
            flex-direction: row;
            flex-wrap: nowrap;
            top: 4vh;
            width: 100%;
            height: 5vh;
            align-items: center;
            justify-content: center;
            .project-direction{
                width: 15%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 50px;
                position: relative;
                top: 5px;
                .project-arrow{
                    color: ${colors.primaryColor}
                    &:hover{
                        color: white;
                    }
                }

            }
            h3{
                display: none;
            }
            li{
                display: none;
            }
        }
        @media (max-width: 900px){
            li{
                font-size: 10px;
            }
        }
`;

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  position: absolute;
  left: 15%;
  padding-bottom: 10vh;
  font-family: "Tajawal", sans-serif;
  @media (max-width: 450px) {
    width: 90%;
    left: 0;
    padding: 0 20px;
  }
`;

export const StyledProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  padding: 2%;
  img {
    width: 46%;
  }
  .project-links a {
    margin: 5px;
    color: ${colors.secondaryColor};
    text-decoration: none;
  }
`;

//Experience
export const ExperienceContainer = styled.div`
  width: 100%;
  font-family: "Tajawal", sans-serif;
  .og h3 {
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.secondaryColor};
    color: white;
  }
  .job-containers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      text-align: center;
      font-weight: bolder;
      font-size: 20px;
    }
  }
  ul {
    font-size: 15px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    margin: 10px 0;
  }
`;

export const BMenu = styled.div`
  font-family: "Tajawal", sans-serif;
  background: ${colors.secondaryColor};
  color: ${colors.primaryColor};
  padding: 2%;
  width: 15vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 4vh;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  .blog-direction {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blog-arrow {
    margin: 10px;
    font-size: 30px;
    color: ${colors.primaryColor};
    transition: ease 0.5s all;
    a.tooltip {
      position: absolute;
      background: ${colors.secondaryColor};
      left: 105%;
      width: 100%;
      height: 5vw;
      font-size: 15px;
      top: 10%;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.primaryColor};
      transition: 0.5s all ease-in;
      border: 3px solid ${colors.primaryColor};
    }
    a.tooltip.active {
      opacity: 1;
    }
    :hover {
      color: ${colors.secondaryColor};
    }
  }
  a {
    opacity: 0;
  }
  @media (max-width: 450px) {
    flex-direction: row;
    flex-wrap: nowrap;
    top: 4vh;
    width: 100vw;
    height: 5vh;
    align-items: center;
    justify-content: center;
    h3 {
      display: none;
    }
    .blog-arrow {
      font-size: 50px;
    }
  }
`;

export const Scroller = styled.ul`
    font-family: "Tajawal", sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    height: 50%;
    width: 120%;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        height: 12px;
        width: 12px;
        background: ${colors.primaryColor};
    }
    ::-webkit-scrollbar-thumb {
        background: ${colors.secondaryColor};
        -webkit-border-radius: 1ex;
        border: 1px solid ${colors.primaryColor}
        -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
    }

    ::-webkit-scrollbar-corner {
        background: ${colors.secondaryColor};
    }
    li {
        font-family: "Tajawal", sans-serif;
        font-size: 15px;
        width: 100%;
        height: 10%;
        transition: all ease-in 0.5s;
        padding: 2%;
        padding-bottom: 5px;
        ${"" /* border-bottom: ${colors.primaryColor} 3px solid; */}
        position: relative;
        a.tooltip {
            position: absolute;
            background: ${colors.secondaryColor};
            // left: 105%;
            font-size: 12px;
            top: 0%;
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${colors.primaryColor};
            transition: 0.5s all ease-in;
            width: 100%;
            height: 100%;
        }
        a.tooltip.active {
            opacity: 1;
        }
    }
    li.active {
        background: ${colors.primaryColor};
        color: ${colors.secondaryColor}
    }
    li:hover {
        background: ${colors.primaryColor};
        color: ${colors.secondaryColor}
        cursor: pointer;
    }
    @media (max-width: 450px) {
        display: none;
    }
`;

export const StyledCurrentPost = styled.div`
  position: absolute;
  left: 20vw;
  padding: 0 5%;
  @media (max-width: 450px) {
    left: 0;
    top: 5vh;
    width: 90%;
    z-index: -10;
    padding-bottom: 10vh;
  }
`;
