import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

import './Register.css'
import { BASE_URL_DB } from '../../App'
import { UserContext } from '../../contexts/UserContext'

const Register = () => {

    const initialValues = { username: '', email: '', password: '', confirmPassword: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const { value, setValue } = useContext(UserContext);

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
            
            if(isSubscribed) {
                
                const register = async () => {
                    const res = await axios.post(BASE_URL_DB + 'farms/register',
                    {
                        username: formValues.username,
                        password: formValues.password,
                        email: formValues.email
                    });
                    
                    if (res.status === 208) {
                        setIsSubmitted(false);
                        setServerError(res.data.message);
                        setIsSubmit(false);
                        return () => {
                            isSubscribed = false;
                        }
                    }
                    
                    setValue({ username: formValues.username, email: formValues.email, token: res.data.token });
                    toast.success('Успешна регистрация.');
                    navigate('/');
                }
                
                register();
            }
        }

        return () => {
            isSubscribed = false;
        }

    }, [value, setValue, navigate, formErrors, isSubmit, formValues]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
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
        } else if (values.confirmPassword !== values.password) {
            errors.password = "Passwords don't match.";
        }

        return errors;
    };

    return (
        <div className="register container" va>
            <h2>Регистрация на Ферма</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="username">Име и Фамилия</label>
                    <input name="username" type="text" value={formValues.username} onChange={handleChange} />
                    <p className="error">{formErrors.username}</p>
                </div>
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
                <div className="field">
                    <label htmlFor="confirmPassword">Повторете паролата</label>
                    <input name="confirmPassword" value={formValues.confirmPassword} type="password" onChange={handleChange} />
                    <p className="error">{formErrors.confirmPassword}</p>
                </div>
                <p className="error">{serverError}</p>
                <div className="buttons">
                    <button disabled={isSubmitted} className="submit" type="submit">Регистрация</button>
                    <Link className="button" to="/login">Вече имам профил</Link>
                </div>
            </form>
        </div>
    )
}

export default Register
