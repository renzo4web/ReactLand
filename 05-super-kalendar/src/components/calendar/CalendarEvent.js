import React from 'react';
import Alert from "react-bootstrap/Alert";

const CalendarEvent = ({event}) => {
    const {title, user} = event
    return (
        <Alert variant={'info'}>
            <Alert.Heading>{title}</Alert.Heading>
        </Alert>
    )
}

export default CalendarEvent;
