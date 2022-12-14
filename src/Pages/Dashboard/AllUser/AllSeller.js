import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://tune-tools-server.vercel.app/users?role=seller', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            });
            const data = await res.json();
            return data;
        }
    });
    // User Delete
    const handleDelete = (id) => {
        const url = `https://tune-tools-server.vercel.app/users/${id}`
        fetch(url, {
            method: 'DELETE',

            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('User Deleted Successfully')
                    refetch()
                }
            })
    }
    const handleVerify = (id, userEmail) => {
        const email = {
            email: userEmail
        }
        const url = `https://tune-tools-server.vercel.app/users/${id}`
        fetch(url, {
            method: 'PUT',

            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller Verified Successfully')
                    refetch();
                }
            })
            .catch(e => console.error(e.message));
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-2 my-4'>
            <h2 className="text-3xl mb-2 ml-2">All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                                <td>
                                    {
                                        user.status !== "verified" ?
                                            <button onClick={() => handleVerify(user._id, user.email)} className='btn btn-xs btn-danger'>Verify</button>
                                            :
                                            <button className='btn btn-xs btn-secondary'>Verified</button>
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

export default AllSeller;