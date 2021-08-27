import React from 'react';

const COLOR_STATUS = {
    'to-do': '#98CA3A',
    'to-be-tested': '#46CF87',
    'in-progress': '#FDA866',
    open: '#0AADE7',
    closed: '#00D8BA',
    completed: '#1cbfa6',
};

const BugEntry = (props) => {
    const { title, icon, createdAt, status, assignee, severity } = props;
    const statusFormated = `${status
        .charAt(0)
        .toUpperCase()
        .slice(0, 1)}${status.slice(1)}`
        .split('-')
        .join(' ');

    return (
        <ul className='bug__entry-list'>
            <li className='bug__entry-item'>{title}</li>
            <li className='bug__entry-item'>{icon && icon}</li>
            <li className='bug__entry-item'></li>
            <li className='bug__entry-item'>
                {new Date(createdAt).toLocaleDateString('es-AR')}
            </li>
            <li className='bug__entry-item'>
                <p
                    className='bug__badge-status'
                    style={{
                        backgroundColor: `${
                            COLOR_STATUS[status] || COLOR_STATUS['open']
                        }`,
                    }}
                >
                    {statusFormated}
                </p>
            </li>
            <li className='bug__entry-item'>{assignee}</li>
            <li className='bug__entry-item'>{severity}</li>
        </ul>
    );
};

export default BugEntry;
