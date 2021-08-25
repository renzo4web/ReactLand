import React from 'react';
import { useSelector } from 'react-redux';
import BugSidebar from './BugSidebar';
import SubmitBug from './SubmitBug';

const Sidebar = () => {
    const { name } = useSelector((state) => state.auth);

    const mockData = [
        {
            bug: 'MArketing video review',
            reporter: 'SCoot',
            createdAt: '14/01/2001',
            status: 'in-progress',
            assignee: 'Steve',
            severity: 'low',
        },
        {
            bug: 'Replace Primer',
            reporter: 'Dadel',
            createdAt: '20/01/2001',
            assignee: 'Dowetre',
            status: 'to-do',
            severity: 'Major',
        },
        {
            bug: 'Streamline support tickets',
            reporter: 'Monica',
            createdAt: '20/01/2005',
            status: 'open',
            assignee: 'Carlos',
            severity: 'Medium',
        },
        {
            bug: 'Like option not workin',
            reporter: 'Alonso',
            createdAt: '20/01/2005',
            status: 'open',
            assignee: 'Hamilton',
            severity: 'none',
        },
        {
            bug: 'Email campaing',
            reporter: 'Max',
            createdAt: '20/01/2001',
            assignee: 'Pierre',
            status: 'to-be-tested',
            severity: 'Medium',
        },
        {
            bug: 'This App',
            reporter: 'Renzo',
            createdAt: '20/01/2001',
            assignee: 'Pierre',
            status: 'completed',
            severity: 'none',
        },
    ];

    return (
        <aside className='sidebar__container'>
            <h2>{name}</h2>
            <img
                style={{ display: 'block', borderRadius: '50%' }}
                src={`https://ui-avatars.com/api/?name=${name}`}
                alt=''
            />

            <SubmitBug />

            <h3>Bugs Assigneed:</h3>
            <ul>
                {mockData.map((bug) => (
                    <li key={bug.bug}>
                        <BugSidebar {...bug} />
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
