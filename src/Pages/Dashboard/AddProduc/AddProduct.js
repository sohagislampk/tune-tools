import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(Authcontext);
    const [registerError, setRegisterError] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const handleAddProduct = (data) => {
        setRegisterError('');
        const image = data.image[0];
        console.log(data);
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

                    const product = {
                        sellerName: user.displayName,
                        SellerEmail: user.email,
                        name: data.name,
                        price: data.price,
                        originalPrice: data.originalPrice,
                        category: data.category,
                        condition: data.radiob,
                        number: data.number,
                        location: data.location,
                        description: data.description,
                        year: data.year,
                        image: imgData.data.url,
                        time: Date()
                    }
                    // save Product to DB
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Product added Successfully')
                            navigate('/dashboard')

                        })
                        .catch(e => {
                            setRegisterError(e.message)
                        });
                }
            })
            .catch(e => {
                setRegisterError(e.message);
            });
    }
    return (
        <div className="flex flex-col my-10 items-center" >
            <div >
                <h1 className="text-5xl font-bold mb-6">Add a Product now!</h1>
            </div>
            <form onSubmit={handleSubmit(handleAddProduct)} className='w-4/6' >
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
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

                        <div className='flex justify-between'>
                            <div className="form-control w-1/3 mr-2">
                                <label className="label">
                                    <span className="label-text">Resale Price</span>
                                </label>
                                <input type="number" placeholder=" Resale Price" {...register("price", {
                                    required: "Resale Price is Required"
                                })} className="input input-bordered" />
                                {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                            </div>
                            <div className="form-control w-1/3 mx-2">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input type="number" placeholder="Original Price" {...register("originalPrice")} className="input input-bordered" />
                                {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                            </div>
                            <div className="form-control w-1/3 ml-2">
                                <label className="label">
                                    <span className="label-text">Purchase Year</span>
                                </label>
                                <input type="number" min="1900" max="2099" step="1" defaultValue="2022" placeholder="Year of purchase"
                                    {...register("year", {
                                        required: "Purchase Year is Required"
                                    })}
                                    className="input input-bordered" />
                                {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className="form-control w-1/2 mr-2">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="tel" maxLength={'13'} placeholder="Mobile number"
                                    {...register("number", {
                                        required: "Mobile Number is Required"
                                    })}
                                    className="input input-bordered" />
                                {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                            </div>
                            <div className="form-control w-1/2 ml-2">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="Location (District only)"
                                    {...register("location", {
                                        required: "Location is Required"
                                    })}
                                    className="input input-bordered" />
                                {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" placeholder="Description"
                                {...register("description", {
                                    required: "Description is Required"
                                })}
                                className="textarea textarea-bordered" />
                            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                        </div>
                        <div className='flex justify-between'>

                            <div className="form-control w-1/2 mr-2">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="file" {...register("image", {
                                    required: "Profile Picture is Required"
                                })} className="file-input file-input-bordered w-full max-w-lg" />
                                {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                            </div>
                            <div className="form-control w-1/2 ml-2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select {...register("category")} className="select select-bordered w-full" defaultValue={'Select A Category'}>
                                    <option disabled>Select A Category</option>
                                    <option>Brass</option>
                                    <option>String</option>
                                    <option>Keyboard</option>
                                    <option>Woodwind</option>
                                    <option>Percussion</option>
                                </select>
                            </div>

                        </div>
                        <div className='flex justify-end items-center'>
                            <p>Condition : </p>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Excellent</span>
                                    <input
                                        type="radio"
                                        value="excellent"
                                        {...register("radiob")}
                                        className="radio checked:bg-primary"

                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Good</span>
                                    <input
                                        type="radio"
                                        value="good"
                                        {...register("radiob")}
                                        className="radio checked:bg-primary" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Fair</span>
                                    <input
                                        type="radio"
                                        value="fair"
                                        {...register("radiob")}
                                        className="radio checked:bg-primary"

                                        defaultChecked />
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <button type='submit' className="btn btn-accent text-white">Add Product</button>
                            {registerError && <p className='text-red-500'>{registerError}</p>}
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;