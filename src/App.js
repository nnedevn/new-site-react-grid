import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

// Import Components
import Navigation from './Components/Navigation';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <Router className="App-intro">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navigation />

        <div>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
  );
};

export default App;
