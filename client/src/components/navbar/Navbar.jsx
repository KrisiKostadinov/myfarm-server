import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container nav-menu">
                <div className="nav-brand">
                    <div className="brand">Моята Ферма</div>
                    <ul className="nav-items">
                        <li className="list-item">
                            <Link to="/home">Начало</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">Относно</Link>
                        </li>
                    </ul>
                </div>
                <ul className="nav-items">
                    <li className="list-item">
                        <Link to="/register">Регистрация</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/login">Вход</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
