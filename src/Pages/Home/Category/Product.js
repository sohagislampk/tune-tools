import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
    const { _id, image, name, description, time, year, price, condition, location, originalPrice, sellerName } = product;
    const postYear = new Date(time).getFullYear();
    const postMonth = new Date(time).getMonth();
    const postDate = new Date(time).getDate();
    const postHour = new Date(time).getHours();
    const postMin = new Date(time).getMinutes();
    const currentYear = new Date().getFullYear();
    const yearOfUse = currentYear - year;
    const date = `${postHour}:${postMin} Date : ${postDate}.${postMonth}.${postYear}`

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between text-primary'>
                    <div><p className=' font-bold ' >Resale Price : ${price}</p></div>
                    <div><p className='font-bold' >Original Price : {originalPrice ? <>${originalPrice}</> : "N/A"}</p></div>
                </div>
                <h2 className="card-title">{name}</h2>

                <div className='flex justify-between items-center font-bold'>
                    <div className='flex items-center' >
                        <BsFillPersonFill className='text-primary mr-1'></BsFillPersonFill>
                        <h3> {sellerName}</h3>
                    </div>
                    <div className='flex items-center' >
                        <ImLocation2 className='text-primary mr-1'></ImLocation2>
                        <p> {location}</p>
                    </div>

                </div>
                <div className='flex justify-between font-semibold text-secondary'>
                    <div>
                        <p>Condition: {condition}</p>

                    </div>
                    <div>
                        <p>Year of Use: {yearOfUse}</p>

                    </div>
                    <div>

                        <p>Purchase Year: {year}</p>
                    </div>
                </div>
                <p>{description.slice(0, 100)}...<Link to={`/products/${_id}`}><button className="text-accent font-semibold hover:text-primary hover:font-bold">see details</button></Link>
                </p>

                <span className='text-xs text-secondary'>Published Time : {date}</span>
                <div className="card-actions justify-center">

                    <button className="btn btn-accent text-white">Book Now</button>
                </div>
            </div>
        </div>

    );
};

export default Product;