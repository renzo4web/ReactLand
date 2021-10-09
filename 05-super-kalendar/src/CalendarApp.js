import React from 'react';
import {Provider} from "react-redux";
import AppRouter from './router/AppRouter';

import Container from 'react-bootstrap/Container';
import {Toaster} from "react-hot-toast";
import {store} from "./store/store";

const CalendarApp = () => {
    return (
        <Provider store={store}>
            <Container fluid className='vh-100 vw-100 d-flex p-0 m-0'>
                <Toaster/>
                <AppRouter/>
            </Container>
        </Provider>
    );
};

export default CalendarApp;
/* Copyright Renzo Barrios 2021. All Rights Reserved */
