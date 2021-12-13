import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationAuth from './navigation-auth/NavigationRight'
import './Admin.css'

const Admin = () => {
    return (
        <div className="admin">
            <NavigationAuth />
            <div className="admin-content">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Admin
