import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../Contexts/AuthProvider';
import Navbar from '../Pages/Shared/Header/Navbar';
import Loading from '../Pages/Shared/Loading/Loading';

const DashboardLayout = () => {
    const { user } = useContext(Authcontext)
    const { data: dbUser = [], isLoading } = useQuery({
        queryKey: ['dbUser'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 font-bold text-base-content">
                        <li><Link to="/dashboard">Dashbord</Link></li>
                        {
                            dbUser.role === 'seller' &&
                            <>
                                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/bookings">My Orders</Link></li>

                            </>
                        }
                        {
                            dbUser.role === 'buyer' &&
                            <>

                                <li><Link to="/dashboard/bookings">My Orders</Link></li>

                            </>
                        }
                        {
                            dbUser.role === 'admin' &&
                            <>
                                <li><Link to="/dashboard/bookings">My Orders</Link></li>
                                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/allbuyer">All Buyer</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;