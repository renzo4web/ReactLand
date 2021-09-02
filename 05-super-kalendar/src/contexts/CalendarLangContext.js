import React, { createContext, useContext, useState } from 'react';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

const Context = createContext();

const CalendarLangContext = ({ children }) => {
    const [currLang, setCurrLang] = useState('en');

    if (currLang === 'es') {
        registerLocale('es', es);
        setDefaultLocale('es');
    } else {
        setDefaultLocale('en');
    }

    return (
        <Context.Provider value={{ currLang, setCurrLang }}>
            {children}
        </Context.Provider>
    );
};

export const useCalendarContext = () => {
    return useContext(Context);
};

export default CalendarLangContext;
