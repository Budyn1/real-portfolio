import React from 'react';
import './NavBarCSS.css'

const NavBar = ({}) => {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });


  return (<div className="navBar">
      <a href="#skill"><div>SKILLS</div></a>
      <a href="#projects"><div>PROJECTS</div></a>
      <a href="#about"><div>ABOUT</div></a>
      <a href="#contact"><div>CONTACT</div></a>
  </div>
)};

export default NavBar;
