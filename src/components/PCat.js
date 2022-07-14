import React from 'react';
import './PCatCSS.css'
import { useEffect } from 'react'
import Carousel from "./carousel.js"

const PCat = (props) => {



  return (
    <div className="barCon" id="projects">
      <div className="bar">
        <div className="title">
          <p className="text">REACT ROUTER PROJECT</p>
          <div className="tech">
            <p>TECHSTACK:</p>
            <div className="techCon">
              {props.js}
              {props.react}
              {props.html}
              {props.css}
              {props.router}
              {props.bs}
            </div>
          </div>
        </div>
        <div className="pCpage">
          <div className="imgCon">
            <Carousel />
            <div className="projectsLinks">
              <button>GITHUB</button>
              <button>DEMO</button>
            </div>
          </div>
          <div className="textCon"><p className="para">I made this project, to deepen my knowledhge about router, and to learn Bootstrap. <br/>I liked the most easeness of making website with BS5. <br/> Webpage contains simple form, landing page, pricing etc.</p></div>
        </div>
      </div>
    </div>
  );
}


export default PCat;
