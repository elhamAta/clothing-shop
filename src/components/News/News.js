import React, { useState, useEffect, useCallback } from 'react';
import TitlePages from '../TitlePages/TitlePages';
import FilterBox from '../FilterBox/FilterBox';
import {PROJECT_URL} from '../../configs/general';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const News = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCounts, setPageCounts] = useState(0)
    const [activePageNumber, setActivePageNumber] = useState(1)

    const loadPosts = async() => {
        setLoading(true);
        const responsePosts = await fetch ('https://run.mocky.io/v3/01733eb4-94b2-48c4-a13d-847621bae502');
        const posts = await responsePosts.json()
        await setPosts(posts);
        setLoading(false);
    };

    useEffect(() => {
        loadPosts();
    } ,[]);

    useEffect(() => {
        setPageCounts( calculatePageCounts());
    } ,[posts]);

    const calculatePageCounts = () => {
        if(posts.length % 3 > 0){
            return parseInt(posts.length / 3 + 1);
        }
        return parseInt(posts.length / 3);
    }

    const handleClickOnPages = useCallback((pageNumber) => {
        setActivePageNumber(pageNumber);
    },[]);

    return(
        <div className="main News-page">
            <TitlePages />
            <FilterBox />
            {loading && <div className="loading"><Image imgSrc={`${PROJECT_URL}spin.gif`} /></div>}
            <ul className="list-news">
                {posts.slice(3 * (activePageNumber - 1), 3 * activePageNumber).map((post) => (
                    <li>
                        <figure>
                            <Link to={`/detailNews/${post.id}`} className="img-box">
                                <Image imgSrc={`${PROJECT_URL}${post.image}`} />
                            </Link>
                            <figcaption>
                                <Link to={`/detailNews/${post.id}`} className="Title_news">{post.title}</Link>
                                <div className="date">{post.date}</div>
                                <p className="desc">{post.content} </p>
                            </figcaption>
                        </figure>
                    </li>
                ))}
                
            </ul>
            <ul className="pagination">
                {new Array(pageCounts).fill(0).map((item,index) => (
                    <li className={activePageNumber === index + 1 ? "active" : ''}>
                        <Button handleClick={() => handleClickOnPages(index + 1)}>
                            {index+1}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News