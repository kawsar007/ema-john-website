import React from 'react';

function ReviewItem(props) {
    const {name, price, quantity, key} = props.product;
    const {removeHandler} = props;
    return (
        <div className="product">
            <div>
            <h4 className="product-name">{name}</h4>
            <p>Price: {price}</p>
            <p>Product Quantity: {quantity}</p>
            <button onClick={() => removeHandler(key)} className="btn-regular">remove</button>
            </div>
        </div>
    )
}

export default ReviewItem
