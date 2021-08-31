import React from 'react';
import AppRouter from './router/AppRouter';
import Container from 'react-bootstrap/Container';

const CalendarApp = () => {
    return (
        <Container fluid className='vh-100 d-flex'>
            <AppRouter />
        </Container>
    );
};

export default CalendarApp;
