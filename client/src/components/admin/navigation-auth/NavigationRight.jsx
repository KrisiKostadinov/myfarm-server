import React from 'react'
import './NavigationRight.css'
import { Link } from 'react-router-dom'
import './NavigationRight.css'

const NavigationRight = () => {
    return (
        <div className="dashboard">
            <ul>
                <li className="nav-item">
                    <Link to="/admin/dashboard">Табло</Link>
                </li>
                <li>
                    <Link to="#animals">Добитък
                        <i class="fas fa-caret-down"></i>
                    </Link>
                    <ul>
                        <li className="nav-item">
                            <Link to="/admin/animal-all">Всички</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/animals/create">Ново</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#barns">Хамбари
                        <i class="fas fa-caret-down"></i>
                    </Link>
                    <ul id="nested2">
                        <li className="nav-item">
                            <Link to="/barn">Нов</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/barn/all">Всички</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#qurantines">Пад карантина
                        <i class="fas fa-caret-down"></i>
                    </Link>
                    <ul>
                        <li className="nav-item">
                            <Link to="animals/create">Ново</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="animals/qurantines">Всички</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default NavigationRight
