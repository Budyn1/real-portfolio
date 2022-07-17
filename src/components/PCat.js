import React from 'react';
import './PCatCSS.css'
import { useEffect, useState, useRef } from 'react'
import Carousel from "./carousel.js"

const PCat = (props) => {

let [demoShow, setDemoShow] = useState(false)

let demoHandler = () => {
  setDemoShow(!demoShow)
}

setTimeout(()=>{setDemoShow(false)}, 5000)

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
              <a href="https://github.com/Budyn1/clutchGH" target="_blank"><button>GITHUB</button></a>
              <button onClick={demoHandler}>DEMO</button>
              {demoShow === true ? <div className="popup">Sorry, site hasn't been hosted yet</div> : ""}
            </div>
          </div>
          <div className="textCon"><p className="para">I made this project, to deepen my knowledhge about router, and to learn Bootstrap. <br/>I liked the most easeness of making website with BS5. <br/> Webpage contains simple form, landing page, pricing etc.</p></div>
        </div>
      </div>
    </div>
  );
}


export default PCat;
