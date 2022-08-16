import React from 'react';
import './Carousel.scss';
import Slider from 'react-slick';
import img1 from '../../assets/image-slide-1.jpg';
import img2 from '../../assets/image-slide-2.jpg';
import img3 from '../../assets/image-slide-3.jpg';
import img4 from '../../assets/image-slide-4.jpg';
import img5 from '../../assets/image-slide-5.jpg';
import slideLeft from '../../assets/icon-arrow-left.svg';
import slideRight from '../../assets/icon-arrow-right.svg';


const Carousel = () => {

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <div className="carousel">
    <h2 className='carousel__header'>My Work</h2>
      <figure className="carousel__slider">
          <img className="carousel__image" src={img1} alt="" />
          <img className="carousel__image" src={img2} alt="" />
          <img className="carousel__image" src={img3} alt="" />
          <img className="carousel__image" src={img4} alt="" />
          <img className="carousel__image" src={img5} alt="" />
      </figure>
      <div className="carousel__arrows">
        <img className='carousel_slider_previous' src={slideLeft} alt="" />
        <img className='carousel_slider_next' src={slideRight} alt="" />
      </div>
    </div>
  )
}

export default Carousel