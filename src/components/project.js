import React from 'react';
import './projectCSS.css'
import PCat from './PCat.js'
import { BsArrowDownCircle } from 'react-icons/bs'
import { FaHtml5, FaCss3, FaReact, } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'


const Project = ({}) => {
  return (
    <div className="project">
      <PCat arrow= <BsArrowDownCircle size={50} className="BsArrow"/> react= <FaReact size={45} color={"aqua"} className="pCI"/>
        html= <FaHtml5 size={45} color={"orange"} className="pCI"/>
        css= <FaCss3 size={45} color={"lightblue"} className="pCI"/>
        js= <SiJavascript size={45} color={"yellow"} className="pCI"/>
      />
      <PCat/>
    </div>
  );
}


export default Project;
