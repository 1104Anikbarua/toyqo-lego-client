import React, { useContext } from 'react';
import { LegoContext } from '../../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const RequireAuth = ({ children }) => {

    const { user, loading } = useContext(LegoContext)
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;