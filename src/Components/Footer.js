import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <footer>
        
        <span>This is the footer.</span>
        <ul>
          <li>
            <i className="fab fa-linkedin"></i>
          </li>
           <li>
             <i className="fab fa-github"></i>
           </li>
        </ul>
      </footer>
    )
  }
}

export default Footer;