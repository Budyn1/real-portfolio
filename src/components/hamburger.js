import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './NavBarCSS.css'

const Hamburger = (props) => {

  return <div className="hamburgerCon" onClick={props.nDisHandler}>
    <GiHamburgerMenu size={30} color={'white'} className="Gimburger"/>
  </div>
};


export default Hamburger;
