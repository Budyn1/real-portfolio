import React from 'react';
import './MainCSS.css'
import { VscArrowDown } from 'react-icons/vsc'
import { IconContext } from "react-icons";

const Main = (props) => (
  <div className="mainCon">
    <p className="name">KACPER<span style={{color:"rgb(255,0,0)", opacity:"0.45" }}>BUDYKA</span></p>
    <button className="button-getinTouch">Get in touch</button>
    <IconContext.Provider value={props.display > 420 ? { color: "white", size:90 } : { color: "white", size:60 } }>
      <div className="VscArrowDownCon">
        <VscArrowDown />
      </div>
    </IconContext.Provider>
  </div>
);


export default Main;
