import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Authcontext } from '../Contexts/AuthProvider';
import Navbar from '../Pages/Shared/Header/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(Authcontext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-slate-300">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 font-bold text-base-content">
                        <li><Link to="/dashboard/allusers">All Users</Link></li>
                        <li><Link to="/dashboard/allusers">All Users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;