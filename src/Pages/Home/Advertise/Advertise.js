import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Category/Product';

const Advertise = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://tune-tools-server.vercel.app/products?status=advertise',);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-16 my-8 mx-4 justify-between lg:mx-8'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}></Product>)
            }
        </div>
    );
};

export default Advertise;