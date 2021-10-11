import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="register">
            <div className="card">
                <h2>Register Account</h2>
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="" placeholder="username" {...register("username")} />

                    <input placeholder="email" {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input defaultValue="" placeholder="password" {...register("password")} />
                    <input defaultValue="" placeholder="re-password" {...register("password")} />

                    <input type="submit" />
                </form>
                <div className="register-bottom">
                    <div>
                    <p>Already have an account? <Link to="/login">Login</Link> </p>
                    <p>-----------or-----------</p>
                    <button type="button" className="btn-regular">Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
