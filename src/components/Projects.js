import React from "react";
import "./Projects.scss";

const Projects = props => {
  return (
    <div className="projects">
      <div className={props.theme === "light" ? "icon li" : "icon dr"}>
        <h1>My Projects</h1>
      </div>
      <p>
        Here you will find my projects:{" "}
        <a href="https://github.com/matthew-hub">
          <span>See my github.</span>
        </a>
      </p>
    </div>
  );
};

export default Projects;
