import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';

const LoginScreen = () => {
    const initialForm = {
        email: '',
        password: '',
    };
    const { msgError, loading } = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm(initialForm);

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }
    };

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };

    const isFormValid = () => {
        if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        }

        if (password.length < 5) {
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
            <h1>Login</h1>

            {msgError && (
                <strong className='ui__alert-input'>{msgError}</strong>
            )}
            <form onSubmit={handleLogin}>
                <div className='ui__input-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        value={email}
                        placeholder='test@gmail.com'
                        onChange={handleInputChange}
                        name='email'
                        id='email'
                        type='text'
                    />
                </div>

                <div className='ui__input-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        value={password}
                        onChange={handleInputChange}
                        name='password'
                        id='password'
                        type='password'
                    />
                </div>

                <button disabled={loading} type='submit' className='auth__btn'>
                    Login
                </button>

                <hr />

                <div>
                    <p>Login with social networks</p>

                    <div onClick={handleGoogleLogin} className='google-btn'>
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

                <Link to='/auth/register'>Create new account</Link>
            </form>
        </>
    );
};

export default LoginScreen;
