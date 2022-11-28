import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Authcontext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const MyWishlist = () => {
    const { user } = useContext(Authcontext);
    const { data: wishlists = [], refetch, isLoading } = useQuery({
        queryKey: ['wishlists'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (id) => {
        const url = `http://localhost:5000/wishlist/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Wishlist Delete Successfully')
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div className='mx-2 my-4'>
            <h2 className="text-3xl mb-2 ml-2">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlists.map((wishlist, i) => <tr key={wishlist._id}>
                                <th>{i + 1}</th>
                                <td>{wishlist.name}</td>
                                <td>${wishlist.price}</td>
                                <td>
                                    {
                                        wishlist.price && !wishlist.paid &&
                                        <Link to={`/dashboard/payment/${wishlist._id}`}><button className='btn btn-xs btn-danger'>Pay</button></Link>
                                    }
                                    {
                                        wishlist.price && wishlist.paid &&
                                        <button className='btn btn-xs btn-secondary'>Paid</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(wishlist._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishlist;