import React from 'react';
import { Link } from 'react-router-dom';
import {PROJECT_URL} from '../../configs/general';
import Image from '../Image/Image';

const SupportBox = () => (
    <div className="main">
        <ul className="SupportBox">
            <li>
                <Link to="">
                    <Image imgSrc={`${PROJECT_URL}icon1.png`} alt="" className="img1" />
                    <Image imgSrc={`${PROJECT_URL}icon1-h.png`} alt="" className="img2" />
                    <span>پرداخت در محل</span>
                </Link>
            </li>
            <li>
                <Link to="">
                    <Image imgSrc={`${PROJECT_URL}icon2.png`} alt="" className="img1" />
                    <Image imgSrc={`${PROJECT_URL}icon2-h.png`} alt="" className="img2" />
                    
                    <span>تضمین کیفیت</span>
                </Link>
            </li>
            <li>
                <Link to="">
                    <Image imgSrc={`${PROJECT_URL}icon3.png`} alt="" className="img1" />
                    <Image imgSrc={`${PROJECT_URL}icon3-h.png`} alt="" className="img2" />
                    <span>تحویل سریع</span>
                </Link>
            </li>
            <li>
                <Link to="">
                    <Image imgSrc={`${PROJECT_URL}icon4.png`} alt="" className="img1" />
                    <Image imgSrc={`${PROJECT_URL}icon4-h.png`} alt="" className="img2" />
                    <span>ارسال رایگان</span>
                </Link>
            </li>
        </ul>
    </div>
);

export default SupportBox