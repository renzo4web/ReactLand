import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BugSidebar = ({ title, status, severity, bugId }) => {
    return (
        <div className='sidebar__bug-card'>
            <Link to={`/bug/${bugId}`}>
                <h4>
                    <AiFillBug /> {title}
                </h4>
            </Link>
            <p>Status: {status}</p>
            <p>Severity: {severity}</p>
        </div>
    );
};

export default BugSidebar;
