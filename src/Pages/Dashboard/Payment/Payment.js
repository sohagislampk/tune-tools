import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData();
    const { name, price } = booking;



    return (
        <div className='mx-2'>
            <h3 className='text-xl md:text-3xl'>Payment For {name}</h3>
            <p className='text-xl'>Please Pay $ {price} to buy.</p>
            <div className='md:w-96 , my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom booking={booking}></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;