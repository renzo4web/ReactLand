import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SelectStatus from '../ui/SelectStatus';
import BugEntry from './BugEntry';

const BugEntries = () => {
    const [selectedStatus, setSelectedStatus] = useState('all');
    const { bugs } = useSelector((state) => state.bugs);
    const { uid } = useSelector((state) => state.auth);

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
            {bugs &&
                bugs
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
