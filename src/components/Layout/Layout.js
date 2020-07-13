import React, { useReducer } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CartContext from '../../contexts/CartContext';
import CartReducer from '../../reducers/Cart';

const Layout = ({children}) => {
    let carts = JSON.parse(localStorage.getItem("carts"));
    const [state, dispatch] = useReducer(CartReducer,{
        carts : carts,
    });
    return(
        <CartContext.Provider
            value={{
                carts : state.carts,
                dispatchCart : dispatch,
            }}
        >
             <div className="layout">
                <Header />
                {children}
                <Footer />
            </div>
        </CartContext.Provider>      
    );
}


export default Layout