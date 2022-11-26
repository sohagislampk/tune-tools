import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Bookings = () => {
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookings');
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = (id) => {
        const url = `http://localhost:5000/bookings/${id}`
        console.log(url);
        fetch(url, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Booking Delete Successfully')
                }
            })
    }

    return (
        <div className='mx-2 mt-4 mb-8'>
            <h2 className="text-3xl mb-2 ml-2">My Products</h2>
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
                                    <div className="w-16 rounded">
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
                                        booking.status !== "paid" ?
                                            <button className='btn btn-xs btn-danger'>Pay</button>
                                            :
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