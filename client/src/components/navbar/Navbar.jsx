import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../contexts/UserContext'

const Navbar = () => {

    const { value } = useContext(UserContext);
    return (
        <div className="navbar">
            <div className="container nav-menu">
                <div className="nav-brand">
                    <Link to="/home">
                        <div className="brand">Моята Ферма</div>
                    </Link>
                    <ul className="nav-items">
                        <li className="list-item">
                            <Link to="/home">Начало</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">Относно</Link>
                        </li>
                    </ul>
                </div>
                {
                    value ?
                        <ul className="nav-items">
                            <li className="list-item">
                                <Link to="#">Здравейте, {value.username}!</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/logout">Изход</Link>
                            </li>
                        </ul> :
                        <ul className="nav-items">
                            <li className="list-item">
                                <Link to="/register">Регистрация</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/login">Вход</Link>
                            </li>
                        </ul>
                }
            </div>
        </div>
    )
}

export default Navbar
