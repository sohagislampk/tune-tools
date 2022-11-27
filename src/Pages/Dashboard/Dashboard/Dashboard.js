import React, { useContext } from 'react';
import { Authcontext } from '../../../Contexts/AuthProvider';

const Dashboard = ({ dbUser }) => {
    const { user } = useContext(Authcontext);
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-6'>Welcom {user.displayName}</h1>
            <div className='flex flex-col items-center border-4 border-secondary mx-20 py-10'>
                <h2 className='text-center text-3xl text-primary font-semibold mb-2'>Profile</h2>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={user.photoURL} alt="" />
                    </div>
                </div>
                <p className='text-2xl text-accent my-2'>Name: {user.displayName}</p>
                <p className='text-2xl text-accent'>Email: {user.email}</p>


            </div>
        </div>
    );
};

export default Dashboard;