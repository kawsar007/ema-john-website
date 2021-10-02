import React from 'react';
import './Cart.css';

function Cart(props) {
    const {cart} = props;

    // const total = cart.reduce((initValue, product) => {
    //   return initValue = initValue + product.price;
    // }, 0);

    let totalQuantity = 0;
    let total = 0;

    for (const product of cart) {
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    
    return (
        <div className="card">
           <h2>Order Summary</h2>
            <h5>Items orders: {totalQuantity}</h5> 
            <h3>Total: {total.toFixed(2)}</h3>
            <p>Shipping: {shipping}</p>
            <p>Txt: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    )
}

export default Cart;
