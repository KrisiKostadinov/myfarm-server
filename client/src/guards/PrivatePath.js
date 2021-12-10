import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

const PrivatePath = ({ children }) => {
    const { value } = useContext(UserContext);
    const auth = value ? false : true;
    return auth ? children : <Navigate to="/" />;
}

export default PrivatePath;