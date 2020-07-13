import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const settings = {
    dots: true,
  };

const SliderIndex = ({
    images = [
        {
            imgSrc: '/images/slider.jpg',
        },
        {
            imgSrc: '/images/slider.jpg',
        },
        {
            imgSrc: '/images/slider.jpg',
        }
    ],
}) => (
    <div className="sliderIndex">
        <Slider {...settings}>
         {images.map((singleImage) => (
             <div>
                 <Link to="/" className="imgBox">
                    <img src={singleImage.imgSrc} alt="اسلایدر صفحه اصلی" />
                 </Link>
             </div>
         ))}
        </Slider>
    </div>
);


export default SliderIndex