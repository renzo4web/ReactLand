import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <div className='navbar__container'>
            <Link className='navbar__item' to='/'>
                Dashboard
            </Link>

            <button onClick={handleLogout} className='ui__btn-logout'>
                Logout
            </button>
        </div>
    );
};

export default Navbar;
