import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      menuToggleActive: false
    };
  }

  burgerToggle = () => {
    this.setState({ menuToggleActive: !this.state.menuToggleActive });
  };

  render() {
    return (
      <nav>
        <ul className="wide-nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>

        <ul className="narrow-nav">
          <a onClick={this.burgerToggle}>
            <i className="fa fa-bars fa-2x" />
          </a>

          <div
            className={
              this.state.menuToggleActive
                ? "narrow-links slide-down"
                : "narrow-links slide-up"
            }
          >
            {console.log(this.state.menuToggleActive)}
            <div>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/resume">Contact</Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
