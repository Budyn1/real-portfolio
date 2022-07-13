import React from 'react';
import {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import "../App.css"

const Carousel = ({}) => {

  const [current, setCurrent] = useState(0)
  let CARDATA = [{image:"/about page design.jpg"}, {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0iBWMuRm_LC6a4AmJNvS6CLALq10n8Vcpw&usqp=CAU"}, {image:"https://a.allegroimg.com/s1024/0c239a/3690acd343a7b3d02b39ea006f4b"}]
  const length = CARDATA.length

  const next = () => {
    setCurrent(current === length -1 ? 0 : current+1)
  }

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current-1)
  }

  return (
    <div className="karuzela">
    <FaArrowAltCircleLeft onClick={previous} className="arrow previous" size={40}/>
    {CARDATA.map((img, index)=>{
        return(
        <div className={index === current ? 'active' : 'carDefault'} key={index}>
          {index === current && (<img src={img.image} alt="obrazek"/>)}
        </div>
    )})}
    <FaArrowAltCircleRight onClick={next} className="arrow next" size={40}/>
    </div>
  );
}

export default Carousel;
