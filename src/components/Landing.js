import React from 'react';
import './LandingCSS.css'
import NavBar from './NavBar.js'
import Main from './Main.js'
import Hamburger from './hamburger.js'

const Landing = (props) => (
  <div className="landing">
    {props.display >= 768 ? <NavBar /> : <Hamburger nDisHandler={props.nDisHandler} nDisState={props.nDis}/>}
    <Main display={props.display}/>
    <div className="based">BASED IN POLAND <br />RZESZÓW </div>
  </div>
);


export default Landing;
