import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex flex-col my-10 items-center" >
            <div >
                <h1 className="text-5xl font-bold mb-6">Register now!</h1>
            </div>
            <form className='w-1/3' >
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Profile picture</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-lg" />
                        </div>
                        <div className='flex justify-end items-center'>
                            <p>Register As : </p>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Seller</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Buyer</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                        </div>
                        <label className="label">
                            <p >Already have Account ? <Link to={'/login'} className="text-primary link link-hover">Login</Link ></p>
                        </label>
                        <div className="form-control">
                            <button className="btn btn-accent text-white">Register</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Register;