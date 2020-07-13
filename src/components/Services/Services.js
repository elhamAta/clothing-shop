import React from 'react';
import {PROJECT_URL} from '../../configs/general';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';

const Services = () => (
    <ul className="listService">
        <li>
            <Link to="">
                <Image imgSrc={`${PROJECT_URL}1.png`} alt="" />
                عضویت در سایت
            </Link>
        </li>
        <li>
            <Link to="">
                <Image imgSrc={`${PROJECT_URL}2.png`} alt="" />
                 عضویت میکاپ آرتیست 
            </Link>
        </li>
        <li>
            <Link to="">
                <Image imgSrc={`${PROJECT_URL}3.png`} alt="" />
                عضویت متخصص پوست
            </Link>
        </li>
    </ul>
);

export default Services