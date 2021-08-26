import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import BugSidebar from './BugSidebar';
import Navbar from './Navbar';
import SubmitBug from './SubmitBug';

const Sidebar = () => {
    const { name } = useSelector((state) => state.auth);
    const { bugs } = useSelector((state) => state.bugs);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <aside className='sidebar__container'>
            <img
                style={{
                    display: 'block',
                    borderRadius: '50%',
                    maxWidth: '100px',
                }}
                src={`https://ui-avatars.com/api/?name=${name}`}
                alt=''
            />
            <h2>{name}</h2>
            <Link className='navbar__item' to='/'>
                Dashboard
            </Link>
            <SubmitBug />

            <h3>Bugs Assigned:</h3>
            <ul className='sidebar__list-bugs'>
                {bugs
                    .filter(({ assignee }) => assignee === name)
                    .map((bug) => (
                        <li key={bug.bugId}>
                            <BugSidebar {...bug} />
                        </li>
                    ))}
            </ul>

            <button onClick={handleLogout} className='ui__btn-logout'>
                Logout
            </button>
        </aside>
    );
};

export default Sidebar;
