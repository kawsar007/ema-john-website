import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../cart/Cart';

function OrderReview() {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className="shop-container">
           <div className="product-container">
            </div>
            <div className="card-container">
                <Cart cart={cart}/>
            </div>
        </div>
    )
}

export default OrderReview;
