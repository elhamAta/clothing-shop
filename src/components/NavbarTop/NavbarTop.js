import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite, MdLocalGroceryStore, MdInfo } from "react-icons/md";
import CartContext from '../../contexts/CartContext';

const NavbarTop = () =>{
    const { carts } = useContext(CartContext);
    return(
        <div className="NavbarTop">
            <div className="main">
                <ul className="login">
                    <li>
                        <Link to="/"> عضویت </Link>
                    </li>
                    <li>
                        <Link to="/"> ورود </Link>
                    </li>
                </ul>
                <div className="date">
                    <span> پنجشنبه 6 تیرماه 1398 </span>
                    <span> ساعت : </span>
                    <span className="time ltr"> 12 : 25 </span><span>بعد از ظهر</span>
                </div>
                <ul className="icons">
                    <li>
                        <Link to="/">
                            <span>
                                {carts && carts.length}
                            </span>
                            <MdLocalGroceryStore />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <MdFavorite />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <MdInfo />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}
 

export default NavbarTop 