import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav role="nav">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </nav>
  );
};

export default Navigation;
