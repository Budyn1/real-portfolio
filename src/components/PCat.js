import React from 'react';
import './PCatCSS.css'
import { useEffect } from 'react'

const PCat = (props) => {



  return (
    <div className="barCon">
      <div className="bar">
        <div className="title">
          <p className="text">EVE ONLINE PROJECT</p>
          <div className="tech">
            <p>TECHSTACK:</p>
            <div>
              {props.js}
              {props.react}
              {props.html}
              {props.css}
            </div>
          </div>
        </div>
        <div className="pCpage">
          <div className="imgCon"><img src="/bgImg.png" /></div>
          <div className="textCon"><p className="para">dwadawfrsffgrtfdggwr ssfghdrjg hsrlfg khisofg khrkgjr ghsdf kld fhrgl kitdre tg yhu kgd rkhtg k, xdh grdk,ietgh d kg, jdrh tlig dhg lkdi</p></div>
        </div>
      </div>
    </div>
  );
}


export default PCat;
