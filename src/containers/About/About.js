import React from "react";
import Me from "../../components/Me";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import "./About.scss";

const About = props => {
  return (
    <div className="about">
      <Me />
      <Contact theme={props.theme} />
      <Projects theme={props.theme} />
    </div>
  );
};

export default About;
