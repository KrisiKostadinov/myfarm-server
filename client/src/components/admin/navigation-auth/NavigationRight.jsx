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
                        <i className="fas fa-caret-down"></i>
                    </Link>
                    <ul>
                        <li className="nav-item">
                            <Link to="/admin/animal-all">Всички</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/create-animal">Ново</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#barns">Хамбари
                        <i className="fas fa-caret-down"></i>
                    </Link>
                    <ul id="nested2">
                        <li className="nav-item">
                            <Link to="/admin/create-barn">Нов</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/barn-all">Всички</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#qurantines">Пад карантина
                        <i className="fas fa-caret-down"></i>
                    </Link>
                    <ul>
                        <li className="nav-item">
                            <Link to="/admin/create-qurantines">Ново</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/qurantines-all">Всички</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default NavigationRight
