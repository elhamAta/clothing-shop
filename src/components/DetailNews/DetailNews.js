import React from 'react';
import TitlePages from '../TitlePages/TitlePages';
import {PROJECT_URL} from '../../configs/general';
import Image from '../Image/Image';
import { useParams } from 'react-router-dom';
import POSTS from './POSTS.json';

const DetailNews = () => {
    const { id } = useParams()
    const news = POSTS.find(item => item.id === id)

    return (
        <div className="main">
            <TitlePages />
            <div className="detailPage clearfix" >
                <h2 className="Title">
                    {news.title}
                </h2>
                <figure className="imgNews">
                    <Image imgSrc={`${PROJECT_URL}${news.image}`} />
                </figure>
                <div className="content">
                    {news.content}
                </div>
            </div>
        </div>
)};

export default DetailNews 