import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const element = <FontAwesomeIcon icon={faShoppingCart} />

function Product(props) {
    const { img, name, price, seller, stock, star } = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                />
                <br/>
                <button onClick={() => props.addToCart(props.product)} type="button" className="btn-regular">{element}   Add To Cart</button>
            </div>
        </div>
    )
}

export default Product
