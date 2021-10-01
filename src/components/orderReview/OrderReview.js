import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

function OrderReview() {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const removeHandler = (key) => {
         const newCart = cart.filter(item => item.key !== key)
         setCart(newCart)
         deleteFromDb(key)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {cart.map(product => <ReviewItem key={product.key} product={product} removeHandler={removeHandler}/>)}
            </div>
            
            <div className="card-container">
                <Cart cart={cart}/>
            </div>
        </div>
    )
}

export default OrderReview;
