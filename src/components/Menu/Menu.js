import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div className="main">
        <ul className="menu">
            <li>
                <Link to="/">
                    آرایشی
                </Link>
            </li>
            <li>
                <Link to="/">
                    محصولات مراقبت از پوست
                </Link>
            </li>
            <li>
                <Link to="/">
                    محصولات مراقبت از بدن
                </Link>
            </li>
            <li>
                <Link to="/">
                    ضدآفتاب ها
                </Link>
            </li>
            <li>
                <Link to="/">
                    محصولات مراقبت از مو
                </Link>
            </li>
            <li>
                <Link to="/">
                    عطر و ادکلن
                </Link>
            </li>
            <li>
                <Link to="/">
                    محصولات مراقبتی آقایان
                </Link>
            </li>
            <li>
                <Link to="/">
                    پیشنهادات ویژه
                </Link>
            </li>
            <li>
                <Link to="/news">
                    آرشیو اخبار
                </Link>
            </li>
        </ul>
    </div>
    
);

export default Menu