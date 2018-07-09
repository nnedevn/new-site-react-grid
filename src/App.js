import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

// Import Components
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <Router className="App-router">
      <div className="App">
        <header className="header item">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>Nick Nedev</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
        </header>
        <Navigation />
        <div className="main-content item">
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </div> 
        <Footer />
      </div>
    </Router>
  );
};

export default App;