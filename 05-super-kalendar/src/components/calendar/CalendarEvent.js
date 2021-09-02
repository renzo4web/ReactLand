import React from 'react';
import Card from "react-bootstrap/Card";

const CalendarEvent = ({event}) => {
    const {title, user} = event
    return (
        <Card
            border={'primary'}
        >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CalendarEvent;
