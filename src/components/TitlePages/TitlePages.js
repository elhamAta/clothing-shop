import React from 'react';
import { useLocation } from "react-router-dom";

const TitlePages = () => {
    let { pathname } = useLocation();
    let title = '';

    if (pathname === '/aboutUs') title="درباره ما";
    if (pathname === '/contactUs') title="ارتباط با ما";
    if (pathname === '/news') title="اخبار";
    if (pathname.includes('detailNews') ) title="اخبار";

    return(
        <div className="h1Frame">
            <div className="main title-inside">
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default TitlePages