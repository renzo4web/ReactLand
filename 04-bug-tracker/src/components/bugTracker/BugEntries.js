import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SelectStatus from '../ui/SelectStatus';
import BugEntry from './BugEntry';

const BugEntries = () => {
    const [selectedStatus, setSelectedStatus] = useState('all');
    const { bugs } = useSelector((state) => state.bugs);
    const { uid } = useSelector((state) => state.auth);

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

    const handleChange = ({ target }) => {
        setSelectedStatus(target.value);
    };

    return (
        <main className={'bug__entries-container'}>
            <SelectStatus onChange={handleChange} value={selectedStatus} />

            <header className='bug__entries-header'>
                <p>Bug</p>
                <p></p>
                <p>REPORTER</p>
                <p>CREATED</p>
                <p>STATUS</p>
                <p>ASSIGNEE</p>
                <p>SEVERITY</p>
            </header>
            {bugs
                .filter((bug) => {
                    return selectedStatus === 'all'
                        ? bug
                        : bug.status === selectedStatus;
                })
                .map((bug) => (
                    <BugEntry
                        key={`${bug.title}-${bug.status}`}
                        {...bug}
                        uid={uid}
                    />
                ))}
        </main>
    );
};

export default BugEntries;
