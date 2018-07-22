import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      
      <div className="project">
        <img src="http://via.placeholder.com/200x200" alt="" />
        <ul class="devicons">
          <li>
            <i class="devicon-react-original colored" />
          </li>
          <li>
            <i class="devicon-html5-plain colored" />
          </li>
          <li>
            <i class="devicon-css3-plain colored" />
          </li>
        </ul>
        <h2>This is the project title</h2>
        <div className="buttons">
          <button>View on GitHub</button>
          <button>Launch Project</button>
        </div>
        <p>This is a short description of the projet Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis velit non voluptatem a autem expedita quasi eos iusto ratione, ducimus excepturi voluptas eligendi numquam.</p>
        
        
      </div>
    </div>
  );
};

export default Projects;
