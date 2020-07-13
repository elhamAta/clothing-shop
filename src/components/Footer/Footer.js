import React from 'react';
import FooterMenu from '../FooterMenu/FooterMenu';
import {PROJECT_URL} from '../../configs/general';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="Footer">
        <div className="main">
            <div className="part1">
                <FooterMenu />
            </div>
            <div className="part2">
                <span className="Title">
                    اطلاعات تماس
                </span>
                <ul>
                    <li>
                        <Image imgSrc={`${PROJECT_URL}email.png`} alt="" />
                        <Link to="mailto:dermacol.ir@gmail.com">
                            dermacol.ir@gmail.com
                        </Link>
                    </li>
                    <li>
                        <Image imgSrc={`${PROJECT_URL}phone.png`} alt="" /> 
                        <Link to="tel:8875482569 021" className="tel">8875482569 021</Link>
                    </li>
                </ul>
            </div>
            <div className="part3">
                <div className="Tilte">ما را در شبکه های اجتماعی دنبال کنید</div>
                    <ul className="social">
                        <li>
                            <Link to="/"target="_blank">
                                <Image imgSrc={`${PROJECT_URL}facebook.png`} alt="" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/" target="_blank">
                                <Image imgSrc={`${PROJECT_URL}instagram.png`} alt="" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/" target="_blank">
                                <Image imgSrc={`${PROJECT_URL}twitter.png`} alt="" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/" target="_blank">
                                <Image imgSrc={`${PROJECT_URL}pintrast.png`} alt="" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/" target="_blank">
                                <Image imgSrc={`${PROJECT_URL}aparat.png`} alt="" /> 
                            </Link>
                        </li>
                    </ul>
                    <div className="Title">بانک های طرف قرارداد</div>
                    <ul className="list_bank">
                        <li>
                            <Link to="/">
                                <Image imgSrc={`${PROJECT_URL}bank.png`} alt="" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <Image imgSrc={`${PROJECT_URL}bank2.png`} alt="" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <Image imgSrc={`${PROJECT_URL}bank3.png`} alt="" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <Image imgSrc={`${PROJECT_URL}bank4.png`} alt="" /> 
                            </Link>
                        </li>
                        
                    </ul>
            </div>
        </div>
    </div>
);

export default Footer 