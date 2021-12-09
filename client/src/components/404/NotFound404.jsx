import React from 'react'
import { useLocation } from 'react-router'

const NotFound404 = () => {
    const path = useLocation().pathname;
    return (
        <div>
            Not Found: {path}
        </div>
    )
}

export default NotFound404
