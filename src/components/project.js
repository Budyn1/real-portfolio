import React from 'react';
import './projectCSS.css'
import PCat from './PCat.js'
import { BsArrowDownCircle } from 'react-icons/bs'
import { FaHtml5, FaCss3, FaReact, } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import picture from "../images/holder.png"

const Project = (props) => {
  return (
    <div className="project">
      <PCat arrow= <BsArrowDownCircle size={50} className="BsArrow"/>
        react= <FaReact size={props.display > 800 ? 45 : 30} color={"aqua"} className="pCI"/>
        html= <FaHtml5 size={props.display > 800 ? 45 : 30} color={"orange"} className="pCI"/>
        css= <FaCss3 size={props.display > 800 ? 45 : 30} color={"lightblue"} className="pCI"/>
        js= <SiJavascript size={props.display > 800 ? 45 : 30} color={"yellow"} className="pCI"/>
        pic={picture}
      />
    </div>
  );
}


export default Project;
