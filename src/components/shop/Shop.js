import React from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

function Shop() {
    const [products, setProducts] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    const [searchProduct, setSearchProduct] = React.useState([]);

    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
           .then(res => res.json())
           .then(data => {
               setProducts(data)
               setSearchProduct(data)
           });
           
    }, []);

    React.useEffect(() => {
        if(products.length){
            const saveCart = getStoredCart();
            const storedCart = [];
        for(const key in saveCart) {
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct){
                const quantity = saveCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
            
        }
        setCart(storedCart);
        }
        
    }, [products])

    const addToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if(exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity += 1;
            newCart = [...rest, product];

        } else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // Save Local Storage (for now)
        addToDb(product.key)
    }

    // Search Product
    const handleSearchProduct = (e) => {
       const searchText = e.target.value;
       const matchProduct = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
       setSearchProduct(matchProduct);
    }
    return (
        <>
        <div className="search-container">
            <input onChange={handleSearchProduct} type="text" className="search" placeholder="Enter Search Product..."/>
        </div>
        <div className="shop-container">
            <div className="product-container">
                {searchProduct.map(product => <Product product={product} addToCart={addToCart}/>)}
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <Link to="/order-review">
                       <button className="btn-regular">Review your order</button>
                    </Link>
                </Cart>
            </div>
        </div>
        </>
    )
}

export default Shop;
