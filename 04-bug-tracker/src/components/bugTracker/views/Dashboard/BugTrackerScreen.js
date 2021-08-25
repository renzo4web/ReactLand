import React from 'react';
import BugEntries from '../../BugEntries';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';

const BugTrackerScreen = () => {
    return (
        <div className='main__screen'>
            <Navbar />
            <div className='flex-row'>
                <Sidebar />
                <BugEntries />
            </div>
        </div>
    );
};

export default BugTrackerScreen;
