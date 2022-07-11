import React from 'react';
import './aboutCSS.css'
import pic2 from "../images/pngwing.com.png"
import pic from "../images/maint.jpg"

const About = ({}) => {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });


  return (<div className="aboutPage">
    <div className="aboutPageCon">
      <div id="about">
        <div className="textPart">
          <h1><span style={{color:"rgba(255, 0, 0, 0.5)"}}>Code</span>, Discuss, <br /> Test and Deploy</h1>
          <p>Transfering work of designers to working website is hard and laborious process, I aim to make it as smooth as possible trough
          writing code as clear as possible, as I like to say "THINK TWICE, CODE ONCE". For me working in a team means cross-checking work
          for bugs and better solutions to deliver, a top-notch product, good is never enough.
          </p>
          <div className="buttonCon">
            <a href="#contact"><button className="intButton">Interested ?</button></a>
          </div>
          <div className="subCon">
            <div className="subItem">I am currently finishing education in STEM field "avionics technician", electronics are not a black
            magic for me
              <div className="subImg"><img src={pic}/></div>
            </div>
            <div className="subItem2">I spend my free time polishing my driving skills, and building my car.
              <div className="subImg"><img src={pic2}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};


export default About;
