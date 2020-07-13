import React from 'react';
import Slider from "react-slick";
import {PROJECT_URL} from '../../configs/general';
import Image from '../Image/Image';
import PRODUCTS from '../Home/PRODUCTS.json';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
const Brands = () =>(
    <div className="sliderBrand">
        <Slider {...settings}>
            {PRODUCTS.map((item) => (
                <figure className="imgBox">
                    <Image imgSrc={`${PROJECT_URL}${item.imageBrand}`} alt="" />
                </figure>
            ))}
          
        </Slider>
    </div>
);

export default Brands