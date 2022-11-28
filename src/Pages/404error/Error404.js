import React from 'react';
import { Link } from 'react-router-dom';
import bgerror from '../../assets/404.jpg'
const Error404 = () => {
    return (
        <div className='flex justify-center h-full w-full' >
            <img className='relative mt-8' src={bgerror} alt="" />
            <Link to={'/'}><button className='btn btn-primary text-black absolute top-1 left-1/2'>Back To Home </button></Link>
        </div>
    );
};

export default Error404;