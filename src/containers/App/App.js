import React, { Component } from "react";
import About from "../About/About";
import ThemeSwitch from "../../components/ThemeSwitch";
import Footer from '../../components/Footer';
import "./App.scss";

class App extends Component {
  state = {
    theme: "light"
  };

  handleClick = () => {
    if (this.state.theme === "light") {
      localStorage.setItem("theme", "dark");
      this.setState({
        theme: "dark"
      });
    } else {
      localStorage.setItem("theme", "light");
      this.setState({
        theme: "light"
      });
    }
  };

  componentDidMount() {
    let theme = localStorage.getItem("theme");
    console.log(theme);
    this.setState({
      theme
    });
  }

  render() {
    let classes = "app";
    if (this.state.theme === "light") {
      classes += " light";
    } else {
      classes += " dark";
    }

    return (
      <div className={classes}>
        <div className="wrapper">
          <header>
            <ThemeSwitch theme={this.state.theme} click={this.handleClick} />
          </header>
          <main>
            <section>
              <About theme={this.state.theme} />
            </section>
          </main>
          <footer><Footer /> </footer>
        </div>
      </div>
    );
  }
}

export default App;
