import React from 'react';
import {PROJECT_URL} from '../../configs/general';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';
import POSTS from './POSTS.json';

const NewsIndex = ({post}) => (
    <ul className="News">
        {POSTS.slice(0, 3).map((post) => (
            <li>
                <Link to={`/detailnews/${post.id}`}  className="img_blog">
                    <Image imgSrc={`${PROJECT_URL}${post.image}`} alt="" />
                </Link>
                <Link to={`/detailnews/${post.id}`} className="title_blog">
                    {post.title}
                </Link>
                <span className="date"> {post.date}</span>
            </li>
        ))}
    </ul>
);

export default NewsIndex