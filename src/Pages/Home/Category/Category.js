
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Category = () => {
    const products = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}

                ></Product>)
            }
        </div>
    );
};

export default Category;