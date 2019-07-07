import React from "react";
import "./ThemeSwitch.scss";
import { ReactComponent as Moon } from "../assets/images/moon.svg";
import { ReactComponent as Sun } from "../assets/images/sun.svg";

const ThemeSwitch = props => {
  return (
    <div className="theme-switch" onClick={props.click}>
      {props.theme === "light" ? <Moon /> : <Sun />}
    </div>
  );
};

export default ThemeSwitch;
