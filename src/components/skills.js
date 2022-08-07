import React from 'react';
import "./skillsCSS.css"
import Skill from "./skill.js"
import { FaHtml5, FaCss3, FaSass, FaReact, FaGithub, FaGitAlt, FaBootstrap } from "react-icons/fa"
import { SiReactrouter, SiJavascript, SiRedux, SiTailwindcss } from "react-icons/si"

const Skills = (props) => (
  <div className="skillsPage" id="skill">
    <h1>MY <span style={{color: "red"}}>SKILLS</span></h1>
    <div className="skillsCon">
      <Skill sk=<FaHtml5 color={"orange"} size={props.display > 760 ? 90 : 45} />/>
      <Skill sk= <FaCss3 color={"lightblue"} size={props.display > 760 ? 90 : 45} />/>
      <Skill sk= <FaBootstrap color={"#8700FF"} size={props.display > 760 ? 90 : 45} />/>
      <Skill sk= <SiJavascript color={"yellow"} size={props.display > 760 ? 90 : 45} />/>
      <Skill sk= <FaReact color={"aqua"} size={props.display > 760 ? 90 : 45} />/>
      {/*<Skill sk= <SiRedux color={"purple"} size={props.display > 760 ? 90 : 45} />/>*/}
      <Skill sk= <SiReactrouter color={"white"} size={props.display > 760 ? 90 : 45} />/>
      <Skill sk= <SiTailwindcss color={"aqua"} size={props.display > 760 ? 90 : 45} />/>
      <Skill sk= <FaSass color={"pink"} size={props.display > 760 ? 90 : 45} />/>
      <Skill sk= <FaGithub color={"white"} size={props.display > 760 ? 90 : 45} />/>
      <Skill sk= <FaGitAlt color={"red"} size={props.display > 760 ? 90 : 45} />/>
    </div>
  </div>
);


export default Skills;
