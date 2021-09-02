import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {useCalendarContext} from "../../contexts/CalendarLangContext";
import {FaLanguage} from "react-icons/fa";


const HeaderNavbar = () => {
    const {setCurrLang, currLang} = useCalendarContext()
    return (
        <Navbar as={'header'} bg="dark" variant="dark">
            <Container className={'py-3'}>
                <Container>

                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/calendar_1f4c5.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        User

                    </Navbar.Brand>
                    <Button onClick={() => setCurrLang(prev => prev === "es" ? 'en' : 'es')}
                            className={'btn-info-outline btn ml-0 mr-auto'}>
                        <FaLanguage size={30} /> : {currLang}
                    </Button>
                </Container>
                <Button className={'btn-danger btn-outline'}>Logout</Button>
            </Container>
        </Navbar>
    )
}

export default HeaderNavbar;
