import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../contexts/UserContext'

const Navbar = () => {

    const { value, setValue } = useContext(UserContext);

    const handleLogout = () => {
        setValue(null);
    }

    return (
        <div className="navbar">
            <div className="container nav-menu">
                <div className="nav-brand">
                    <Link to="/home">
                        <div className="brand">
                            <i className="fas fa-fan"></i>
                            Моята Ферма
                        </div>
                    </Link>
                    <ul className="nav-items">
                        <li className="list-item">
                            <Link to="/home">
                                <i className="fas fa-home"></i>
                                Начало
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/about">
                                <i className="fas fa-question"></i>
                                Относно
                            </Link>
                        </li>
                    </ul>
                </div>
                {
                    value ?
                        <ul className="nav-items">
                            <li className="list-item">
                                <Link to="#">
                                    <i className="fas fa-user"></i>
                                    Здравейте, {value.username}!
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link onClick={handleLogout} to="#">
                                    <i className="fas fa-sign-out-alt"></i>
                                    Изход
                                </Link>
                            </li>
                        </ul> :
                        <ul className="nav-items">
                            <li className="list-item">
                                <Link to="/register">
                                    <i className="fas fa-user-plus"></i>
                                    Регистрация
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to="/login">
                                    <i className="fas fa-sign-in-alt"></i>
                                    Вход
                                </Link>
                            </li>
                        </ul>
                }
            </div>
        </div>
    )
}

export default Navbar
