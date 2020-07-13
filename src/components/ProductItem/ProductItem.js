import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {PROJECT_URL} from '../../configs/general';
import Image from '../Image/Image';
import { MdLocalGroceryStore, MdRemoveShoppingCart } from "react-icons/md";
import Button from '../Button/Button';
import CartContext from '../../contexts/CartContext';




const ProductItem = ({data}) => {
    const {carts, dispatchCart } = useContext(CartContext);
    const added = carts ? carts.includes(data.id) : "empty";
    
    const handleAdd = () => {
        if (added) {
            dispatchCart({
                type: "REMOVE_FROM_CART",
                id: data.id,
            });
        } else {
            dispatchCart({
                type : "ADD_TO_CART",
                id: data.id,
            });
        } 
    }
    return(
        <div className="item">
            <figure>
                {/* <div className="new">
                    <span>{items.status}</span>
                </div> */}
                <Link className="imgBox" to="">
                    <Image imgSrc={`${PROJECT_URL}${data.image}`} />
                </Link>
                <Link to={`/products/${data.id}`} className="namePro">
                    {data.name}
                </Link>
                <div className="priceAll">
                    <del unit="هزارتومان"> {data.off} </del> 
                    <span  unit="هزارتومان" className="price">{data.price}</span>
                </div>
                <Button  className="basket"
                    handleClick={handleAdd}
                >
                    {added ? (
                        <>
                            <MdRemoveShoppingCart />
                        </>
                    ):(
                        <>
                            <MdLocalGroceryStore />
                        </>
                    )}
                </Button>
            </figure>
        </div>
          
    );
    
}


export default ProductItem