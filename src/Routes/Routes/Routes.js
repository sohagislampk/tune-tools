import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Main from '../../Layouts/Main';
import Error404 from '../../Pages/404error/Error404';
import Blog from '../../Pages/Blog/Blog';
import AddProduct from '../../Pages/Dashboard/AddProduc/AddProduct';
import AllBuyer from '../../Pages/Dashboard/AllUser/AllBuyer';
import AllSeller from '../../Pages/Dashboard/AllUser/AllSeller';

import Bookings from '../../Pages/Dashboard/Bookings/Bookings';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import MyProduct from '../../Pages/Dashboard/ManageProduct/MyProduct';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import MyWishlist from '../../Pages/Dashboard/Wishlist/MyWishlist';
import Category from '../../Pages/Home/Category/Category';
import ProductDetails from '../../Pages/Home/Category/ProductDetails';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            },
            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },

            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/bookings',
                element: <Bookings></Bookings>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashboard/wishlist',
                element: <PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>

            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])

export default routes;