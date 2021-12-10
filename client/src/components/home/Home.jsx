import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';

const Home = () => {
    const { value } = useContext(UserContext);

    return (
        <div>
            { JSON.stringify(value) }
        </div>
    )
}

export default Home
