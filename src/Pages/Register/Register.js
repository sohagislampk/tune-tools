import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Contexts/AuthProvider';

const Register = () => {
    const { registerUser, updateUserInfo } = useContext(Authcontext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [registerError, setRegisterError] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const handleRegister = (data) => {
        setRegisterError('');
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const userData = {
                        name: data.name,
                        email: data.email,
                        image: imgData.data.url,
                        role: data.radiob
                    }
                    registerUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url
                            }
                            updateUserInfo(userInfo)
                                .then(() => {


                                    fetch('http://localhost:5000/users', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(userData)
                                    })
                                        .then(res => res.json())
                                        .then(result => {

                                            toast.success('Registration Successfull')
                                            navigate('/')
                                        })
                                        // fet
                                        .catch(e => {
                                            setRegisterError(e.message)
                                        });

                                })
                                .catch(e => setRegisterError(e.message))
                        })
                        .catch(e => setRegisterError(e.message))
                }
            })
            .catch(e => {
                setRegisterError(e.message);
            });
    }

    return (
        <div className="flex flex-col my-10 items-center" >
            <div >
                <h1 className="text-5xl font-bold mb-6">Register now!</h1>
            </div>
            <form onSubmit={handleSubmit(handleRegister)} className='w-1/3' >
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", {
                                required: "Email is Required"
                            })} className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                {...register("password", {
                                    required: "Password is Required"
                                })}
                                className="input input-bordered" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Profile picture</span>
                            </label>
                            <input type="file" {...register("image", {
                                required: "Profile Picture is Required"
                            })} className="file-input file-input-bordered w-full max-w-lg" />
                            {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                        </div>
                        <div className='flex justify-end items-center'>
                            <p>Register As : </p>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Seller</span>
                                    <input
                                        type="radio"
                                        value="seller"
                                        {...register("radiob")}
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
                                        {...register("radiob")}
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
                            {registerError && <p className='text-red-500'>{registerError}</p>}
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Register;