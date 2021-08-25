import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <div className='navbar__container'>
            <nav className='navbar'>
                <ul className='navbar__list'>
                    <li>
                        <NavLink className='navbar__item' to='/'>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink clasname='navbar__item' to='/bugs'>
                            Bugs
                        </NavLink>
                    </li>
                </ul>

                <div className='navbar__list'>
                    <button onClick={handleLogout} className='ui__btn-logout'>
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
