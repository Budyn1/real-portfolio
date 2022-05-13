import React, { useState } from 'react';
import './footerCSS.css'
import { MdPlace } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { FaDiscord, FaGithubSquare} from 'react-icons/fa'
import emailjs from "emailjs-com"

export const Footer = ({}) => {

  const Yay = () => (
    <p className="yay">Your message was sent</p>
  )

  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_w13ngyr", 'template_q0ah4jl', e.target, '53OI2gFb2TiksdNey')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          setSent(true);
          console.log(sent)
      }, (error) => {
          console.log(error.text);
      })
    };

  setTimeout(()=>{setSent(false)}, 4000)

  return (<div className="footer">
    <div className="footerCon" id="contact">
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
          <a href="https://youtube.com" target="blank">
            <FaGithubSquare color="red" size={25} className="git" />
          </a>
          <a href="https://youtube.com" target="blank">
          <FaDiscord color="red" size={25}  className="dc" />
          </a>
        </div>
      </div>
      <div className="footerForm">
        <form onSubmit={sendEmail}>
          <input name="name" placeholder="Your name" type="text" required/>
          <input name="email" placeholder="Your email" type="email" required/>
          <textarea name="message" placeholder="How can i help you" rows="5" required/>
          <div className="sButton">
            <button type="submit" >Send message</button>
            {sent ? <Yay /> : null}
          </div>
        </form>
      </div>
    </div>
    <div className="rights">
      <p>All rights reserved by ©Kacper Budyka</p>
    </div>
  </div>
)};
