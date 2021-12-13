import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

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
