import React from "react";
import "./Contact.scss";
const Contact = props => {
  let styless = {
    color: "#F82929",
    borderBottom: "3px solid #F82929"
  };

  if (props.theme !== "light") {
    styless.color = "#fff";
  }

  return (
    <div className="contact">
      <h1>Say Hello!</h1>
      <p>
        Thanks for stopping by!
        <br />
        I'd be happy to help you out!
      </p>
      <a href="mailto:hello@matthew.com">
        <span style={styless}>mat.ressel430@gmail.com</span>
      </a>
    </div>
  );
};

export default Contact;
