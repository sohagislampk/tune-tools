import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Loading from '../../Pages/Shared/Loading/Loading';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();
    if (loading || isAdminLoading || isSellerLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default SellerRoute;