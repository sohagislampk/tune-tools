import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout';
import Main from '../../Layouts/Main';
import AddProduct from '../../Pages/Dashboard/AddProduc/AddProduct';
import AllBuyer from '../../Pages/Dashboard/AllUser/AllBuyer';
import AllSeller from '../../Pages/Dashboard/AllUser/AllSeller';
import AllUser from '../../Pages/Dashboard/AllUser/AllUser';
import MyProduct from '../../Pages/Dashboard/ManageProduct/MyProduct';
import Category from '../../Pages/Home/Category/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

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
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default routes;