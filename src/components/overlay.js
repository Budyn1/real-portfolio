import React from 'react';
import "./NavBarCSS.css"

const Overlay = (props) => (
  <div className="overlay" onClick={props.nDisHandler}>
    <a href="#contact"><div>CONTACT</div></a>
    <a href="#about"><div>ABOUT</div></a>
    <a href="#skill"><div>SKILLS</div></a>
    <a href="#projects"><div>PROJECTS</div></a>
  </div>
);


export default Overlay;
