import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login">
            <div className="card">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="email" {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input defaultValue="" placeholder="password" {...register("password")} />

                    <input type="submit" />
                </form>
                <div className="login-bottom">
                    <div>
                    <p>New a ema-john ? <Link to="register">Create account</Link> </p>
                    <p>------------or-----------</p>
                    <button onClick={handleGoogleLogin} type="button" className="btn-regular">Google Sign In</button>
                </div>
            </div>

        </div>
        </div >
    )
}

export default Login;
