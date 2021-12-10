import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

const GuestPath = ({ children }) => {
    const { value } = useContext(UserContext);
    const auth = value ? true : false;
    return auth ? children : <Navigate to="/login" />;
}

export default GuestPath;