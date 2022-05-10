import React from 'react';
import './footerCSS.css'
import { MdPlace } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { FaDiscord, FaGithubSquare} from 'react-icons/fa'

const Footer = ({}) => (
  <div className="footer">
    <div className="footerCon">
      <div className="footerInfo">
        <div className="gIT">Get in touch</div>
        <div className="place">
          <MdPlace color={"red"} size={35}/>
          <p>Lewakowskiego 3/29 <br /> 35-119 Rzeszów, Poland</p>
        </div>
        <div className="number">
          <AiFillPhone color={"red"} size={35}/>
          <p>+48 695 287 553</p>
        </div>
        <div className="icons">
          <FaGithubSquare color="red" size={25} className="git" onClick=""/>
          <FaDiscord color="red" size={25}  className="dc" onClick=""/>
        </div>
      </div>
      <div className="footerForm">
        <form>
          <input id="name" placeholder="Your name" type="text" required/>
          <input id="emailAdress" placeholder="Your email" type="email" required/>
          <textarea id="message" placeholder="How can i help you" rows="5" required/>
          <button type="submit" >Send message</button>
        </form>
      </div>
    </div>
    <div className="rights">
      <p>All rights reserved by ©Kacper Budyka</p>
    </div>
  </div>
);


export default Footer;
