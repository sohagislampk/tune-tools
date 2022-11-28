import React, { useContext, useEffect, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Contexts/AuthProvider';
import BookingModal from './BookingModal/BookingModal';
import { MdVerifiedUser } from 'react-icons/md'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import toast from 'react-hot-toast';
import axios from "axios";

const Product = ({ product }) => {
    const { _id, image, name, description, time, year, price, condition, location, originalPrice, sellerName, status, wishlist, sellerEmail, userRole } = product;
    const [dbUser, setDbUser] = useState({})
    const { user } = useContext(Authcontext);
    const postYear = new Date(time).getFullYear();
    const postMonth = new Date(time).getMonth();
    const postDate = new Date(time).getDate();
    const postHour = new Date(time).getHours();
    const postMin = new Date(time).getMinutes();
    const currentYear = new Date().getFullYear();
    const yearOfUse = currentYear - year;
    const date = `${postHour}:${postMin} Date : ${postDate}.${postMonth}.${postYear}`

    useEffect(() => {
        fetch(`http://localhost:5000/users/${sellerEmail.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                setDbUser(result)
            })
    }, [])


    const handleWishlist = (id, wishlist) => {
        const wishlistAdd = {
            wishlist: wishlist,
            email: user.email,
            image: image,
            name: name,
            price: price,
            buyerName: user.displayName
        }
        const headers = {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }

        axios.put(`https://tune-tools-server.vercel.app/products/${id}`, wishlistAdd, { headers })
            .then(result => {

                if (result.data.modifiedCount > 0 || result.data.acknowledged === true) {
                    toast.success('Added whishlist Successfully')


                }
            })

    }
    return (
        <>
            {
                status !== "sold" && <div className="card card-compact my-8 w-full bg-base-100 shadow-xl indicator">

                    <figure><img src={image} alt="Shoes" /></figure>

                    {
                        status === "advertise" && <span className="indicator-item badge-lg rounded-full badge-accent">Sale</span>
                    }

                    <div className="card-body">
                        <div className='flex justify-between text-primary'>
                            <div><p className=' font-bold ' >Resale Price : ${price}</p></div>
                            <div><p className='font-bold' >Original Price : {originalPrice ? <>${originalPrice}</> : "N/A"}</p></div>
                        </div>
                        <h2 className="card-title">{name}</h2>

                        <div className='flex justify-between items-center font-bold'>
                            <div className='flex items-center' >
                                <BsFillPersonFill className='text-primary mr-1'></BsFillPersonFill>
                                {
                                    userRole === 'verified' ?
                                        <div className='flex tooltip tooltip-primary' data-tip="Verified Seller">
                                            <h3> {sellerName}</h3>
                                            <p> <MdVerifiedUser className='text-primary' ></MdVerifiedUser></p>
                                        </div>
                                        :
                                        <h3> {sellerName}</h3>

                                }
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
                            {
                                user?.email ?
                                    <label htmlFor="booking-modal" className="btn btn-accent text-white">Book Now</label>
                                    :
                                    <Link to="/login" ><button className="btn btn-accent text-white">Book Now</button></Link>
                            }
                            {
                                wishlist === 'added'
                                    ? <AiFillHeart className='tooltip text-5xl text-accent' data-tip="Wishlisted"></AiFillHeart>
                                    : <AiOutlineHeart onClick={() => handleWishlist(_id, 'added')} className=' tooltip text-5xl text-primary' data-tip="Add to Wishlist"></AiOutlineHeart>
                            }
                        </div>
                    </div>
                    <BookingModal product={product}></BookingModal>
                </div>
            }
        </>

    );
};

export default Product;