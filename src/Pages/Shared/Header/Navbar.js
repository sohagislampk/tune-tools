import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(Authcontext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div>
            <div className="navbar text-white bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Category
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Brass</a></li>
                                    <li><a>String</a></li>
                                    <li><a>Keyboard</a></li>
                                    <li><a>Woodwind</a></li>
                                    <li><a>Percussion</a></li>
                                </ul>
                            </li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-10' src="Tune Tools.png" alt="" />
                        <p className="text-2xl font-bold">Tune Tools</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Home</Link></li>
                        <li tabIndex={0}>
                            <a>
                                Category
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-primary">
                                <li><a>Brass</a></li>
                                <li><a>String</a></li>
                                <li><a>Keyboard</a></li>
                                <li><a>Woodwind</a></li>
                                <li><a>Percussion</a></li>
                            </ul>
                        </li>

                        <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <button onClick={handleLogout} className="btn btn-accent mx-4 px-8 text-white">Logout</button>
                            :
                            <>
                                <Link to={'/login'}> <button className="btn btn-accent mx-4 px-8 text-white">Login</button></Link>
                                <Link to={'/register'}> <button className="btn btn-accent text-white">Register</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;