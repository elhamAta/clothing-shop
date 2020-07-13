import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenu = () => (
    <ul className="menuFooter">
        <li>
            <Link to="/aboutUs">درباره ما</Link>
        </li>
        <li>
            <Link to="/contactUs">تماس با ما</Link>
        </li>
        <li>
            <Link to="/">خدمات پس از فروش</Link>
        </li>
        <li>
            <Link to="/">خدمات تخصصی</Link>
        </li>
        <li>
            <Link to="/news">اخبار</Link>
        </li>
        <li>
            <Link to="/">همه چیز در رابطه با زیبایی</Link>
        </li>
        <li>
            <Link to="/">نظرسنجی</Link>
        </li>
        <li>
            <Link to="/">سوالات متداول</Link>
        </li>
        <li>
            <Link to="/">مشتریان ما</Link>
        </li>
        <li>
            <Link to="/">راهنمای تبلیغات در سایت</Link>
        </li>
        <li>
            <Link to="/">راهنمای سایت</Link>
        </li>
        <li>
            <Link to="/">قوانین و مقررات</Link>
        </li>
        <li>
            <Link to="/">عضویت در خبرنامه</Link>
        </li>
        <li>
            <Link to="/">نقشه سایت</Link>
        </li>
    </ul>
    
);

export default FooterMenu