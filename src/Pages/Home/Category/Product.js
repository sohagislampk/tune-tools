import React from 'react';

const Product = ({ product }) => {
    const { image, name, description, time, year, price, condition, location } = product;
    const postYear = new Date(time).getFullYear();
    const postMonth = new Date(time).getMonth();
    const postDate = new Date(time).getDate()
    const currentYear = new Date().getFullYear();
    const yearOfUse = currentYear - year;
    const date = `${postDate}.${postMonth}.${postYear}`
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <span>{yearOfUse}</span>
                    <span>{date}</span>
                    <button className='btn btn-accent text-white'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;