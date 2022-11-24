import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const picture = form.picture.value;
        const role = form.radiob.value
        const user = {
            name: name,
            email: email,
            picture: picture,
            role: role
        }

    }

    return (
        <div className="flex flex-col my-10 items-center" >
            <div >
                <h1 className="text-5xl font-bold mb-6">Register now!</h1>
            </div>
            <form onSubmit={handleRegister} className='w-1/3' >
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Profile picture</span>
                            </label>
                            <input type="file" name='picture' className="file-input file-input-bordered w-full max-w-lg" />
                        </div>
                        <div className='flex justify-end items-center'>
                            <p>Register As : </p>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Seller</span>
                                    <input
                                        type="radio"
                                        value="seller"
                                        name="radiob"
                                        className="radio checked:bg-primary"

                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Buyer</span>
                                    <input
                                        type="radio"
                                        value="buyer"
                                        name="radiob"
                                        className="radio checked:bg-primary"

                                        defaultChecked />
                                </label>
                            </div>
                        </div>
                        <label className="label">
                            <p >Already have Account ? <Link to={'/login'} className="text-primary link link-hover">Login</Link ></p>
                        </label>
                        <div className="form-control">
                            <button type='submit' className="btn btn-accent text-white">Register</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Register;