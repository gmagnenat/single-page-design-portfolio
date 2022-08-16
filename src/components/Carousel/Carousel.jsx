import React, { useState } from 'react';
import './Carousel.scss';
import slideLeft from '../../assets/icon-arrow-left.svg';
import slideRight from '../../assets/icon-arrow-right.svg';
import imageData from '../Slides/Slides';

const Carousel = ({ slides }) => {

const [current, setCurrent] = useState(2);
const arrLength = slides.length;

const nextSlide = () => {
  setCurrent(current === arrLength - 1 ? 0 : current + 1)
}

const prevSlide = () => {
  setCurrent(current === 0 ? arrLength - 1: current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0){
  return null;
}

  return (
    <div className="carousel">
      <h2 className='carousel__header'>My Work</h2>
       <div className="carousel__slider">
          {
            imageData.map((slide, index) => {
              return (
                <div className = {index === current ? 'slide-active' : slide} key={index}>
                  {
                    index === current && (
                      <img src={slide.imageURL} alt="" className="carousel__image" />
                    )
                  }
                </div>
              )
            })
          }
       </div>
      
      <div className="carousel__arrows">
        <img className='carousel_slider_previous' src={slideLeft} alt="" onClick={prevSlide}/>
        <img className='carousel_slider_next' src={slideRight} alt="" onClick={nextSlide} />
      </div>
    </div>
  )
}

export default Carousel