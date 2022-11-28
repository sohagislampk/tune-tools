import React, { useContext, useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { signIn } = useContext(Authcontext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserEmail(user.email)

            })
            .catch(error => {
                setLoginError(error.message)
            })

    }
    return (
        <div className="flex flex-col my-10 items-center" >
            <div >
                <h1 className="text-5xl font-bold mb-6">Login now!</h1>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="lg:w-1/3">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                {...register("email", {
                                    required: "Email is Required"
                                })} className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{appendErrors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                {...register("password", {
                                    required: "Password is Required"
                                })} className="input input-bordered" />
                            {errors.password && <p className='text-red-500'>{appendErrors.password.message}</p>}
                            <label className="label">
                                <p >Don't have Account ? <Link to={'/register'} className="text-primary link link-hover">Create Account</Link></p>
                            </label>
                        </div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-accent text-white">Login</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;