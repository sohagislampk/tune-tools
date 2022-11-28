import React from 'react';
import { FaShippingFast } from 'react-icons/fa'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { SiIconfinder } from 'react-icons/si'

const Information = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col items-center p-12 lg:p-20 text-center'>
                <FaShippingFast className='text-primary text-6xl' ></FaShippingFast>
                <h1 className='font-bold'>SHIPPING & RETURN</h1>
                <p>Shipping on your location and return within 3 days for a full refund. </p>
            </div>
            <div className='flex flex-col items-center p-12 lg:p-20 text-center'>
                <RiSecurePaymentLine className='text-primary text-6xl' ></RiSecurePaymentLine>
                <h1 className='font-bold'>SAFE PAYMENT</h1>
                <p>Pay with the world's most popular and secure payment methods </p>
            </div>
            <div className='flex flex-col items-center p-12 lg:p-20 text-center'>
                <SiIconfinder className='text-primary text-6xl' ></SiIconfinder>
                <h1 className='font-bold'>SHOP WITH CONFIDENCE</h1>
                <p>Our Buyer Protection covers your purchase from click to delivery. </p>
            </div>
        </div>
    );
};

export default Information;