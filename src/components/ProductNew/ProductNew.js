import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem'
import Slider from "react-slick";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
  };
const ProductNew = ({data}) =>{
    return (
        <div className="productNew">
            <h2 className="Title">
                جدیدترین محصولات
            </h2>
            <Link to="/" className="Title2">مشاهده همه محصولات</Link>
            <div className="sliderPro">
                <Slider {...settings}>
                    {data.map((item) => (
                         <ProductItem data={item} />
                    ))}
                </Slider>
           </div>
        </div>
    
    );
} 


export default ProductNew