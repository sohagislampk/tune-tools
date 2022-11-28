import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Bookings = () => {
    const { user } = useContext(Authcontext)
    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = (id) => {
        const url = `http://localhost:5000/bookings/${id}`
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
                    toast.success('Booking Delete Successfully')
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-2 mt-4 mb-8'>
            <h2 className="text-3xl mb-2 ml-2">My Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Delete</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>

                                <td><div className="avatar">
                                    <div className="w-8 md:w-16 rounded">
                                        <img src={booking.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{booking.name}</td>
                                <td>${booking.price}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.location}</td>
                                <td><button onClick={() => handleDelete(booking._id)} className='btn btn-xs btn-denger'>Delete</button></td>
                                <td>

                                    {
                                        booking.price && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-xs btn-danger'>Pay</button></Link>
                                    }
                                    {
                                        booking.price && booking.paid &&
                                        <button className='btn btn-xs btn-secondary'>Paid</button>
                                    }
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Bookings;