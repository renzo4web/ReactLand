import React, {useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import Container from "react-bootstrap/Container";

import {useCalendarContext} from "../../contexts/CalendarLangContext";
import {messagesEs} from "../../helpers/calendar-messages-es";
import HeaderNavbar from "../ui/HeaderNavbar";
import CalendarEvent from "./CalendarEvent";

import "moment/locale/es"
import "react-big-calendar/lib/css/react-big-calendar.css"
import ModalCalendar from "./ModalCalendar";
import {useSelector} from "react-redux";

const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        title: 'Hola',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgColor: 'blue',
        notes: 'HOla mundo',
        user: {
            _id: '21312',
            name: 'Renzoo'
        }
    }
]


const CalendarScreen = () => {
    const {events} = useSelector(state => state.calendar)
    const [lastView, setLastView] = useState(() => localStorage.getItem("lastView") || 'month')
    const [show, setShow] = useState(false);


    const {currLang} = useCalendarContext()

    const onDoubleClick = (event) => {
        setShow(true)
    }

    const onSelect = (event) => {
        console.log(event)
    }

    const onViewChange = (event) => {
        console.log('view', event)
        localStorage.setItem('lastView', event)
        setLastView(event)
    }


    moment.locale(currLang)

    return (
        <Container fluid>
            <HeaderNavbar/>

            <ModalCalendar show={show} setShow={setShow}/>

            <Container className={'my-4'} fluid>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: "80vh"}}
                    onDoubleClickEvent={onDoubleClick}
                    onSelectEvent={onSelect}
                    onView={onViewChange}
                    view={lastView}
                    messages={currLang === "es" && messagesEs}
                    components={{
                        event: CalendarEvent
                    }}
                />
            </Container>
        </Container>
    );
};

export default CalendarScreen;
