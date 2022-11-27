import React from 'react';
import { Link } from 'react-router-dom';
import bgerror from '../../assets/404.jpg'
const Error404 = () => {
    return (
        <div className='flex justify-center' style={{ background: `url(${bgerror})`, backgroundSize: 'cover', height: '650px' }}>
            <Link to={'/'}><button className='btn btn-accent text-white mt-4'>Back To Home </button></Link>
        </div>
    );
};

export default Error404;