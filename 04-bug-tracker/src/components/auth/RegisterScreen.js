import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import {
    registerFirestore,
    startRegisterWithEmailPasswordName,
} from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {
    const { msgError } = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    console.log(msgError);

    const [formValues, handleInputChange] = useForm({
        name: 'TEst',
        email: 'test@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email, password, password2 } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(name, email, password));
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name invalid'));
            return false;
        }

        if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        }

        if (password !== password2 || password.length < 5) {
            dispatch(
                setError(
                    'Password should be at least 5 characters long and match each other'
                )
            );
            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h1>Register</h1>

            {msgError && (
                <strong className='ui__alert-input'>{msgError}</strong>
            )}
            <form onSubmit={handleSubmit}>
                <div className='ui__input-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleInputChange}
                        name='name'
                        id='name'
                        type='text'
                        value={name}
                    />
                </div>

                <div className='ui__input-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleInputChange}
                        value={email}
                        name='email'
                        id='email'
                        type='text'
                    />
                </div>

                {/* TODO : CHECK THE PASSAWORD ARE THE SAME */}

                <div className='ui__input-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleInputChange}
                        value={password}
                        name='password'
                        id='password'
                        type='password'
                    />
                </div>

                <div className='ui__input-group'>
                    <label htmlFor='password2'>Confirm password</label>
                    <input
                        onChange={handleInputChange}
                        value={password2}
                        name='password2'
                        id='password2'
                        type='password'
                    />
                </div>
                <button className='ui__button'>Enter</button>

                <hr />

                <div>
                    <p>Register with social networks</p>

                    <div className='google-btn'>
                        <div className='google-icon-wrapper'>
                            <img
                                className='google-icon'
                                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                                alt='google button'
                            />
                        </div>
                        <p className='btn-text'>
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className='link' to='/auth/login'>
                    Already register ?
                </Link>
            </form>
        </>
    );
};

export default RegisterScreen;
