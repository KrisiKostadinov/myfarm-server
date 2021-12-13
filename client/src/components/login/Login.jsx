import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import './Login.css'
import { BASE_URL_DB } from '../../App';
import { UserContext } from '../../contexts/UserContext';

const Login = () => {

    const initialValues = { email: '', password: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { value, setValue } = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        let isSubscribed = true;

        if (Object.keys(formErrors).length === 0 && isSubmit) {

            setIsSubmitted(true);

            if (isSubscribed) {
                const login = async () => {
                    const res = await axios.post(BASE_URL_DB + 'farms/login',
                    {
                        password: formValues.password,
                        email: formValues.email
                    });
                    
                    if(res.status === 208) {
                        setIsSubmit(false);
                        setServerError(res.data.message);
                        setIsSubmitted(false);
                        return () => {
                            isSubscribed = false;
                        }
                    }
                    
                    navigate('/admin');
                    setValue({ username: res.data.username, email: res.data.email, token: res.data.token });
                    toast.success('Успешно влизане в системта.');
                }

                login();
            }

            return () => {
                isSubscribed = false;
            }
        }
    }, [value, setValue, navigate, formErrors, isSubmit, formValues]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors;
    };

    return (
        <div className="login container">
            <h2>Вход в Фермата</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input name="email" value={formValues.email} type="email" onChange={handleChange} />
                    <p className="error">{formErrors.email}</p>
                </div>
                <div className="field">
                    <label htmlFor="password">Парола</label>
                    <input name="password" value={formValues.password} type="password" onChange={handleChange} />
                    <p className="error">{formErrors.password}</p>
                </div>
                <p className="error">{serverError}</p>
                <div className="buttons">
                    <button disabled={isSubmitted} className="submit" type="submit">Вход</button>
                    <Link className="button" to="/register">Нямам регистрация</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
