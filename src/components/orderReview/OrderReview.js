import React from 'react';
import useProducts from '../../hooks/useProducts';

function OrderReview() {
    const [products] = useProducts();
    return (
        <div>
            <h2>OrderReview Components {products.length}</h2>
        </div>
    )
}

export default OrderReview;
