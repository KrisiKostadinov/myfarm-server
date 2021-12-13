import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

import './CreateAnimal.css'
import { UserContext } from '../../../contexts/UserContext'
import { BASE_URL_DB } from '../../../App'

const CreateAnimal = () => {

    const initialValues = { type: '', count: 0, breed: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const { value } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};

        if (!values.type || !values.count || !values.breed) {
            errors.type = "Това поле е задължително!";
        }

        return errors;
    };

    useEffect(() => {
        let isSubscribed = true;
        
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const headers = {
                'Content-Type': 'application/json',
                'authorization': value.token
            }

            if (isSubscribed) {
                setIsSubmit(false);
                
                const createAnimal = async () => {
                    const result = await axios.post(BASE_URL_DB + 'animal/create', { ...formValues }, { headers });
                    if(result.status === 200) {
                        setFormValues({ type: '', count: 0, breed: '' });
                        toast.success('Успешно създадена категория животни.');
                    }
                }

                createAnimal();
            }
        }

        return () => {
            isSubscribed = false;
        }
    }, [value, formErrors, isSubmit, formValues, setServerError, setIsSubmit, setIsSubmitted]);

    return (
        <div className="form-container">
            <h2>Вход в Фермата</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="type">Тип на живитното</label>
                    <input name="type" value={formValues.type} type="type" onChange={handleChange} />
                    <p className="error">{formErrors.type}</p>
                </div>
                <div className="field">
                    <label htmlFor="count">Брой</label>
                    <input name="count" value={formValues.count} type="number" onChange={handleChange} />
                    <p className="error">{formErrors.count}</p>
                </div>
                <div className="field">
                    <label htmlFor="breed">Порода</label>
                    <input name="breed" value={formValues.breed} type="text" onChange={handleChange} />
                    <p className="error">{formErrors.breed}</p>
                </div>
                <p className="error">{serverError}</p>
                <div className="buttons">
                    <button disabled={isSubmitted} className="submit" type="submit">Добави</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAnimal
