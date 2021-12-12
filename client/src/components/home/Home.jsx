import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';
import './Home.css'

const Home = () => {
    const { value } = useContext(UserContext);

    return (
        <div className="home-wrapper">
            <div className="container">
                <h2>Улесни си управлението на фермата с приложението</h2>
                <div className="row">
                    <h4>Моята Ферма</h4>
                    <div className="buttons">
                        <Link to="/register" className="register">Стартирай сега</Link>
                        <Link to="/login" className="login">Вход</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
