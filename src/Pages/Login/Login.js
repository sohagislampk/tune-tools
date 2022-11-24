import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col my-10 items-center" >
            <div >
                <h1 className="text-5xl font-bold mb-6">Login now!</h1>
            </div>
            <form className="w-1/3">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p >Don't have Account ? <Link to={'/register'} className="text-primary link link-hover">Create Account</Link></p>
                            </label>
                        </div>
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