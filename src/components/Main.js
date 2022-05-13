import React from 'react';
import './MainCSS.css'
import { VscArrowDown } from 'react-icons/vsc'
import { IconContext } from "react-icons";

const Main = (props) => {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });


  return(<div className="mainCon">
    <p className="name">KACPER<span style={{color:"rgb(255,0,0)", opacity:"0.45" }}>BUDYKA</span></p>
    <a href="#contact">
      <button className="button-getinTouch">Get in touch</button>
    </a>
    <IconContext.Provider value={props.display > 420 ? { color: "white", size:90 } : { color: "white", size:60 } }>
      <div className="VscArrowDownCon">
        <a href="#about"><VscArrowDown /></a>
      </div>
    </IconContext.Provider>
  </div>
)};


export default Main;
