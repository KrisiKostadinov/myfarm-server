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
                        <div className="brand">
                            <i class="fas fa-fan"></i>
                            Моята Ферма
                        </div>
                    </Link>
                    <ul className="nav-items">
                        <li className="list-item">
                            <Link to="/home">
                                <i class="fas fa-home"></i>
                                Начало
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/about">
                                <i class="fas fa-question"></i>
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
                                    <i class="fas fa-user"></i>
                                    Здравейте, {value.username}!
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to="/logout">
                                    <i class="fas fa-sign-out-alt"></i>
                                    Изход
                                </Link>
                            </li>
                        </ul> :
                        <ul className="nav-items">
                            <li className="list-item">
                                <Link to="/register">
                                    <i class="fas fa-user-plus"></i>
                                    Регистрация
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to="/login">
                                    <i class="fas fa-sign-in-alt"></i>
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
