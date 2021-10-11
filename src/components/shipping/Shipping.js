import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';


function Shipping() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const {user} = useAuth();

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
