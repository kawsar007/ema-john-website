import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';


function Shipping() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId) {
              alert('Order processed successfully!');
              clearTheCart();
              reset();
            }
        })
    } 

    

    console.log(watch("example"));
    return (
        <div className="shipping">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.exampleRequired && <span className="error">This field is required</span>}

                <input placeholder="City" {...register("city")} />

                <input  placeholder="Address" {...register("address")} />

                <input  placeholder="Phone" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Shipping;
