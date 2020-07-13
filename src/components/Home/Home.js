import React from 'react';
import SliderIndex from './../SliderIndex/SliderIndex';
import SupportBox from './../SupportBox/SupportBox';
import ProductNew from './../ProductNew/ProductNew';
import PRODUCTS from './PRODUCTS.json';
import NewsIndex from '../NewsIndex/NewsIndex';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';


const Home = () => (
    <div className="index">
        <SliderIndex />
        <SupportBox />
        <div className="part1">
            <div className="main">
                <ProductNew data={PRODUCTS}/>
            </div>
        </div>
        <span className="back_layer" style={{
            background:"url(/images/bg1.jpg)no-repeat center center"
        }}></span>
        <div className="part3">
            <div className="main">
                <h3 className="titleNews">اخبار و تازه ها</h3>
                <NewsIndex />
                <Services />
            </div>
        </div>
        <div className="part4">
            <div className="main">
                <Brands />
            </div>
        </div>
    </div>
)

export default Home 