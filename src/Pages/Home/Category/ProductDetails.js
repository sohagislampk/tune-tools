import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import BookingModal from './BookingModal/BookingModal';
import { Authcontext } from '../../../Contexts/AuthProvider';
const ProductDetails = () => {
    const { user } = useContext(Authcontext)
    const productDetails = useLoaderData();

    const location = useLocation();


    const {
        name,
        image,
        price,
        originalPrice,
        sellerName,
        location: locationForProduct,
        condition,
        description,
        time,
        year } = productDetails;
    const postYear = new Date(time).getFullYear();
    const postMonth = new Date(time).getMonth();
    const postDate = new Date(time).getDate();
    const postHour = new Date(time).getHours();
    const postMin = new Date(time).getMinutes();
    const currentYear = new Date().getFullYear();
    const yearOfUse = currentYear - year;
    const date = `${postHour}:${postMin} Date : ${postDate}.${postMonth}.${postYear}`
    return (
        <div className="card card-compact w-5/6 mx-auto my-16 bg-base-100 shadow-xl">

            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
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
                        <p> {locationForProduct}</p>
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
                <p>{description}
                </p>

                <span className='text-xs text-secondary'>Published Time : {date}</span>
                <div className="card-actions justify-center">

                    {
                        user?.email ?
                            <label htmlFor="booking-modal" className="btn btn-accent text-white">Book Now</label>
                            :
                            <Link to="/login" ><button className="btn btn-accent text-white">Book Now</button></Link>
                    }
                </div>
            </div>
            <BookingModal product={productDetails}></BookingModal>
        </div>
    );
};

export default ProductDetails;