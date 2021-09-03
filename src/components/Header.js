import React from 'react';
import Logol from "./images/logo1.svg";
import "./styles/header.css";

function Header() {
    return (
        <div>
        <div className="header">
            
        <div className="">
            <h2>JAIBHEEM EDUCATIONAL SOCIETY</h2>
           <img className="header_logo"
            
          src = {Logol}
          alt="jes_logo" /> 
         
          </div> 
          </div>
          <div className="nav-menu">
              <ul>
                <li>Home</li>
                <li>Success Stories</li>
                <li>Gallery</li>
                <li>Events</li>
                <li>Blog</li>
              
              </ul>
          </div>
        
        
        </div>
    )
}

export default Header
