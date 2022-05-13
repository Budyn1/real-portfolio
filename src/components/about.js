import React from 'react';
import './aboutCSS.css'

const About = ({}) => (
  <div className="aboutPage">
    <div className="aboutPageCon">
      <div id="about">
        <div className="textPart">
          <h1><span style={{color:"rgba(255, 0, 0, 0.5)"}}>Code</span>, Discuss, <br /> Test and Deploy</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i
          ndustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc</p>
          <div className="buttonCon">
            <button className="intButton">Interested ?</button>
          </div>
          <div className="subCon">
            <div className="subItem">some random text as placeholdersome random text as placeholder</div>
            <div className="subItem2">some random text as placeholdersome random text as placeholder</div>
          </div>
        </div>
        <div className="graphicPart"></div>
      </div>
    </div>
  </div>
);


export default About;
