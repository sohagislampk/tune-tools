import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProduct = () => {
    const { data: products = [], } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });


    return (
        <div className='mx-2 my-4'>
            <h2 className="text-3xl mb-2 ml-2">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Delete</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                                <td><button className='btn btn-xs btn-danger'>Advertise</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;