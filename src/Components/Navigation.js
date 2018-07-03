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
      <nav crole="nav">
        <ul className="wide-nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="narrow-nav">
          <a onClick={this.burgerToggle}>
            <i className="fa fa-bars fa-2x" />
          </a>
          <div
            className="narrow-links"
            className={
              this.state.menuToggleActive ? "displayMobileNav" : "hideMobileNav"
            }
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
