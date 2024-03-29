import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

function OrderReview() {
    // const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();

    const removeHandler = (key) => {
         const newCart = cart.filter(item => item.key !== key)
         setCart(newCart)
         deleteFromDb(key)
    }
    
    const history = useHistory();
    
    const handleProceedToShipping = () => {
        history.push('/shipping')
        // setCart();
        // clearTheCart();
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {cart.map(product => <ReviewItem key={product.key} product={product} removeHandler={removeHandler}/>)}
            </div>
            
            <div className="card-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn-regular">Proceed to shipping</button>
                </Cart>
            </div>
        </div>
    )
}

export default OrderReview;
