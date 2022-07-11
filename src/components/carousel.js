import React from 'react';
import {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

const Carousel = ({}) => {

  const [current, setCurrent] = useState(0)
  const length = CARDATA.length
  let CARDATA = [{image:"ph"}, {image:"ph"}, {image:'ph'}]


  return (
    <section>
    <FaArrowAltCircleLeft/>
    {CARDATA.map((img, index)=>{
        return <img src={img.image} alt="obrazek" />
    })}
    <FaArrowAltCircleRight/>
    <section/>
  );
}

export default Carousel;
